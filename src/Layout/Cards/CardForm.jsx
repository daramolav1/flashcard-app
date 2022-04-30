import React, { useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import { createCard, readCard, updateCard } from "../../utils/api";

export default function CardForm() {
  const { params } = useRouteMatch();
  const { deckId, cardId } = params;
  const history = useHistory();

  const INITIALFORMSTATE = {
    front: "",
    back: "",
  };

  const [card, setCard] = useState({ ...INITIALFORMSTATE });
  const [cardFront, setCardFront] = useState("");
  const [cardBack, setCardBack] = useState("");

  useEffect(() => {
    async function loadCard() {
      try {
        const response = readCard(cardId);
        const cardFromAPI = await response;
        setCardFront(cardFromAPI.front);
        setCardBack(cardFromAPI.back);
      } catch (error) {
        console.log(error);
      }
    }

    loadCard();
  }, [cardId]);

  const handleChange = ({ target }) => {
    setCard({
      ...card,
      [target.name]: target.value,
    });
  };

  const handleFrontChange = ({ target }) => setCardFront(target.value);
  const handleBackChange = ({ target }) => setCardBack(target.value);

  const handleDoneOrCancelClick = () => history.push(`/decks/${deckId}`);

  const handleSaveClick = (event) => {
    event.preventDefault();
    createCard(deckId, card).then(() => setCard({ ...INITIALFORMSTATE }));
  };

  const handleSubmitClick = (event) => {
    event.preventDefault();
    updateCard({
      id: cardId,
      front: cardFront,
      back: cardBack,
      deckId: Number(deckId),
    }).then(() => history.push(`/decks/${deckId}`));
  };

  if (cardId) {
    return (
      <form onSubmit={handleSubmitClick}>
        <div className="form-group">
          <label htmlFor="front">Front</label>
          <textarea
            className="form-control"
            name="front"
            id="front"
            onChange={handleFrontChange}
            value={cardFront}
          ></textarea>
        </div>

        <div className="form-group">
          <label htmlFor="back">Back</label>
          <textarea
            className="form-control"
            name="back"
            id="back"
            onChange={handleBackChange}
            value={cardBack}
          ></textarea>
        </div>

        <div className="mb-5">
          <button
            type="button"
            className="btn btn-secondary mr-2"
            onClick={handleDoneOrCancelClick}
          >
            Done
          </button>
          <button type="submit" className="btn btn-primary">
            Save
          </button>
        </div>
      </form>
    );
  }

  return (
    <form onSubmit={handleSaveClick}>
      <div className="form-group">
        <label htmlFor="front">Front</label>
        <textarea
          className="form-control"
          name="front"
          id="front"
          placeholder="Front side of card"
          onChange={handleChange}
          value={card.front}
        ></textarea>
      </div>

      <div className="form-group">
        <label htmlFor="back">Back</label>
        <textarea
          className="form-control"
          name="back"
          id="back"
          placeholder="Back side of card"
          onChange={handleChange}
          value={card.back}
        ></textarea>
      </div>

      <div className="mb-5">
        <button
          type="button"
          className="btn btn-secondary mr-2"
          onClick={handleDoneOrCancelClick}
        >
          Done
        </button>
        <button type="submit" className="btn btn-primary">
          Save
        </button>
      </div>
    </form>
  );
}

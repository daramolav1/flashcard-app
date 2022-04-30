import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import { createDeck } from "../../utils/api";

export default function CreateDeckForm() {
  const history = useHistory();

  const INITIALFORMSTATE = {
    name: "",
    description: "",
  };
  const [deckData, setDeckData] = useState({ ...INITIALFORMSTATE });

  const handleCancel = () => {
    history.push("/");
  };

  const handleChange = ({ target }) => {
    setDeckData({
      ...deckData,
      [target.name]: target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    createDeck(deckData).then((newDeck) => {
      setDeckData({ ...INITIALFORMSTATE });
      history.push(`/decks/${newDeck.id}`);
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          className="form-control"
          placeholder="Deck Name"
          onChange={handleChange}
          value={deckData.name}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          rows="5"
          className="form-control"
          placeholder="Brief description of the deck"
          onChange={handleChange}
          value={deckData.description}
        ></textarea>
      </div>

      <div className="mb-5">
        <button className="btn btn-secondary mr-2" onClick={handleCancel}>
          Cancel
        </button>
        <button className="btn btn-primary" type="submit">
          Submit
        </button>
      </div>
    </form>
  );
}

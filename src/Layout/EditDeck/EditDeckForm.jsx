import React, { useEffect, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { readDeck, updateDeck } from "../../utils/api/index";

function EditDeckScreen() {
  const [deckName, setDeckName] = useState("");
  const [deckDescription, setDeckDescription] = useState("");

  const history = useHistory();
  const { deckId } = useParams();

  useEffect(() => {
    async function loadDeck() {
      const response = readDeck(deckId);
      const deckFromAPI = await response;
      setDeckName(deckFromAPI.name);
      setDeckDescription(deckFromAPI.description);
    }
    loadDeck();
  }, [deckId]);

  const handleDeckNameChange = ({ target }) => setDeckName(target.value);
  const handleDeckDescriptionChange = ({ target }) =>
    setDeckDescription(target.value);

  const handleCancel = () => {
    history.push(`/decks/${deckId}`);
  };

  const handleEditDeckSubmit = (event) => {
    event.preventDefault();
    updateDeck({
      id: deckId,
      name: deckName,
      description: deckDescription,
    }).then((updatedDeck) => history.push(`/decks/${updatedDeck.id}`));
  };

  return (
    <form onSubmit={handleEditDeckSubmit}>
      <div className="form-group">
        <label htmlFor="deckName">Name</label>
        <input
          id="deckName"
          type="text"
          name="deckName"
          className="form-control"
          onChange={handleDeckNameChange}
          value={deckName}
        />
      </div>
      <div className="form-group">
        <label htmlFor="deckDescription">Description</label>
        <textarea
          id="deckDescription"
          name="deckDescription"
          className="form-control"
          rows="5"
          onChange={handleDeckDescriptionChange}
          value={deckDescription}
        />
      </div>

      <div className="mb-5">
        <button className="btn btn-secondary mr-2" onClick={handleCancel}>
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </div>
    </form>
  );
}

export default EditDeckScreen;

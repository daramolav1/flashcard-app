import React from "react";
import { useHistory } from "react-router-dom";

export default function AddCardsBtn({ deckId }) {
  const history = useHistory();

  return (
    <button
      className="btn btn-primary"
      onClick={() => history.push(`/decks/${deckId}/cards/new`)}
    >
      <span className="oi oi-plus"></span> Add Cards
    </button>
  );
}

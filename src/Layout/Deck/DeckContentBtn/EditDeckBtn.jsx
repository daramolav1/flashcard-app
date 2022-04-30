import React from "react";
import { useHistory } from "react-router-dom";

export default function EditDeckBtn({ deck }) {
  const history = useHistory();

  return (
    <button
      className="btn btn-secondary mr-2"
      onClick={() => history.push(`/decks/${deck.id}/edit`)}
    >
      <span className="oi oi-pencil"></span> Edit
    </button>
  );
}

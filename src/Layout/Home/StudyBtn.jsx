import React from "react";
import { useHistory } from "react-router-dom";

export default function StudyBtn({ deck }) {
  const history = useHistory();

  return (
    <button
      className="btn btn-primary"
      type="button"
      onClick={() => history.push(`/decks/${deck.id}/study`)}
    >
      <span className="oi oi-book" /> Study
    </button>
  );
}

import React from "react";
import { useHistory } from "react-router-dom";

export default function StudyDeckBtn({ deck }) {
  const history = useHistory();

  return (
    <button
      className="btn btn-primary mr-2"
      onClick={() => history.push(`/decks/${deck.id}/study`)}
    >
      <span className="oi oi-book"></span> Study
    </button>
  );
}

import React from "react";
import { useHistory } from "react-router-dom";

export default function ViewBtn({ deck }) {
  const history = useHistory();

  return (
    <button
      className="btn btn-secondary mr-2"
      type="button"
      onClick={() => history.push(`/decks/${deck.id}`)}
    >
      <span className="oi oi-eye" /> View
    </button>
  );
}

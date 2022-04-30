import React from "react";
import { useHistory, useRouteMatch } from "react-router-dom";

export default function EditCardBtn({ card }) {
  const history = useHistory();
  const { url } = useRouteMatch();

  return (
    <button
      className="btn btn-secondary mr-2"
      onClick={() => {
        history.push(`${url}/cards/${card.id}/edit`);
      }}
    >
      <span className="oi oi-pencil"></span> Edit
    </button>
  );
}

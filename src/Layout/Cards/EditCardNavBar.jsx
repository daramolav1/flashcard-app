import React from "react";
import { Link, useRouteMatch } from "react-router-dom";

export default function EditCardNavBar({ deck }) {
  const { params } = useRouteMatch();
  const { cardId } = params;

  return (
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">
          <span className="oi oi-home"></span> Home
        </Link>
      </li>

      <li className="breadcrumb-item">
        <Link to={`/decks/${deck.id}`}>Deck {deck.name}</Link>
      </li>

      <li className="breadcrumb-item active">Edit Card {cardId}</li>
    </ol>
  );
}

import React from "react";
import { Link } from "react-router-dom";

export default function AddCardNavBar({ deck }) {
  return (
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">
          <span className="oi oi-home"></span> Home
        </Link>
      </li>

      <li className="breadcrumb-item">
        <Link to={`/decks/${deck.id}`}>{deck.name}</Link>
      </li>

      <li className="breadcrumb-item active">Add Card</li>
    </ol>
  );
}

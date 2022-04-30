import React from "react";
import { Link } from "react-router-dom";

export default function DeckNavBar({ deck }) {
  return (
    <ol className="breadcrumb">
      <li className="breadcrumb-item">
        <Link to="/">
          <span className="oi oi-home"></span> Home
        </Link>
      </li>

      <li className="breadcrumb-item active">{deck.name}</li>
    </ol>
  );
}

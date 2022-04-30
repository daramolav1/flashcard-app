import React from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../../../utils/api";

export default function DeleteDeckBtn({ deck }) {
  const history = useHistory();

  const handleDeleteBtnClick = () => {
    if (
      window.confirm("Delete this deck?\n\nYou will not be able to recover it.")
    ) {
      deleteDeck(deck.id).then(() => history.push("/"));
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleDeleteBtnClick}>
      <span className="oi oi-trash"></span>
    </button>
  );
}

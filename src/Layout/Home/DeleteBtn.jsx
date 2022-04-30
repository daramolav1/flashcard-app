import React from "react";
import { useHistory } from "react-router-dom";
import { deleteDeck } from "../../utils/api";

export default function DeleteBtn({ deck }) {
  const history = useHistory();

  function refresh() {
    history.go(0);
  }

  const handleDeleteBtnClick = () => {
    if (
      window.confirm("Delete this deck?\n\nYou will not be able to recover it.")
    ) {
      deleteDeck(deck.id);
      refresh();
    }
  };

  return (
    <button
      className="btn btn-danger"
      type="button"
      onClick={handleDeleteBtnClick}
    >
      <span className="oi oi-trash" />
    </button>
  );
}

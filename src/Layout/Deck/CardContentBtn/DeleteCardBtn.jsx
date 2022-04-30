import React from "react";
import { useHistory } from "react-router-dom";
import { deleteCard } from "../../../utils/api";

export default function DeleteCardBtn({ card }) {
  const history = useHistory();

  const handleDeleteBtnClick = () => {
    if (
      window.confirm("Delete this card?\n\nYou will not be able to recover it.")
    ) {
      deleteCard(card.id).then(() => history.go(0));
    }
  };

  return (
    <button className="btn btn-danger" onClick={handleDeleteBtnClick}>
      <span className="oi oi-trash"></span>
    </button>
  );
}

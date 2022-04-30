import DeleteDeckBtn from "./DeckContentBtn/DeleteDeckBtn";
import EditDeckBtn from "./DeckContentBtn/EditDeckBtn";
import StudyDeckBtn from "./DeckContentBtn/StudyDeckBtn";
import AddCardsBtn from "./DeckContentBtn/AddCardsBtn";
import React from "react";

export default function DeckContent({ deck }) {
  return (
    <div className="mb-5">
      <div>
        <h2>{deck.name}</h2>
        <p>{deck.description}</p>
      </div>
      <div className="d-flex">
        <div className="mr-auto">
          <EditDeckBtn deck={deck} />
          <StudyDeckBtn deck={deck} />
          <AddCardsBtn deck={deck} />
        </div>
        <DeleteDeckBtn deck={deck} />
      </div>
    </div>
  );
}

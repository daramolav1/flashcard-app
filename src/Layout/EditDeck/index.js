import EditDeckNavBar from "./EditDeckNavBar";
import EditDeckForm from "./EditDeckForm";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { readDeck } from "../../utils/api";

export default function EditDeck() {
  const [deck, setDeck] = useState({});
  const { params } = useRouteMatch();
  const { deckId } = params;

  useEffect(() => {
    async function loadDeck() {
      const response = await readDeck(deckId);
      const deckFromAPI = await response;
      setDeck(deckFromAPI);
    }

    loadDeck();
  }, [deckId]);

  if (deck) {
    return (
      <div>
        <EditDeckNavBar deck={deck} />
        <h1>Edit Deck</h1>
        <EditDeckForm />
      </div>
    );
  }
}

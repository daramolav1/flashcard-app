import AddCardNavBar from "./AddCardNavBar";
import CardForm from "./CardForm";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { readDeck } from "../../utils/api";

export default function AddCard() {
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
        <AddCardNavBar deck={deck} />
        <h5>{deck.name}: Add Card</h5>
        <CardForm />
      </div>
    );
  }
}

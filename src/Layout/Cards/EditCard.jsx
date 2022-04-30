import EditCardNavBar from "./EditCardNavBar";
import CardForm from "./CardForm";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { readDeck } from "../../utils/api";

export default function EditCard() {
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
        <EditCardNavBar deck={deck} />
        <h2>Edit Card</h2>
        <CardForm />
      </div>
    );
  }
}

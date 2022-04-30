import DeckNavBar from "./DeckNavBar";
import DeckContent from "./DeckContent";
import React from "react";
import { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { readDeck } from "../../utils/api";
import CardContent from "./CardContent";

export default function Deck() {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  const { params } = useRouteMatch();
  const { deckId } = params;

  useEffect(() => {
    async function loadDeck() {
      const response = await readDeck(deckId);
      const deckFromAPI = await response;
      setDeck(deckFromAPI);
      setCards(deckFromAPI.cards);
    }

    loadDeck();
  }, [deckId]);

  if (deck) {
    return (
      <div>
        <DeckNavBar deck={deck} />
        <DeckContent deck={deck} />
        <CardContent cards={cards} />
      </div>
    );
  }
}

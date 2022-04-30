import StudyNavBar from "./StudyNavBar";
import StudyCard from "./StudyCard";
import React, { useEffect, useState } from "react";
import { useRouteMatch } from "react-router-dom";
import { readDeck } from "../../utils/api";

export default function Study() {
  const [deck, setDeck] = useState({});
  const [cards, setCards] = useState([]);
  const [currentCard, setCurrentCard] = useState({});
  const { params } = useRouteMatch();
  const { deckId } = params;

  useEffect(() => {
    async function loadDeck() {
      const response = await readDeck(deckId);
      const deckFromAPI = await response;
      setDeck(deckFromAPI);
      setCards(deckFromAPI.cards);
      setCurrentCard(deckFromAPI.cards[0]);
    }

    loadDeck();
  }, [deckId]);

  if (deck) {
    return (
      <div>
        <StudyNavBar deck={deck} />
        <h1>Study: {deck.name}</h1>
        <StudyCard
          cards={cards}
          currentCard={currentCard}
          setCurrentCard={setCurrentCard}
          deckId={deckId}
        />
      </div>
    );
  }
}

import FlipBtn from "./FlipBtn";
import NextBtn from "./NextBtn";
import AddCardsBtn from "./AddCardsBtn";
import React, { useState } from "react";
import { useHistory } from "react-router-dom";

export default function StudyCard({
  cards,
  currentCard,
  setCurrentCard,
  deckId,
}) {
  const [cardCount, setCardCount] = useState(1);
  const [isFrontOfCard, setIsFrontOfCard] = useState(true);
  const history = useHistory();

  const handleNextCard = () => {
    if (cardCount < cards.length) {
      setIsFrontOfCard((side) => !side);
      setCurrentCard(cards[cardCount]);
      setCardCount((count) => count + 1);
    } else {
      if (
        window.confirm(
          "Restart cards?\n\nClick 'cancel' to return to the home page"
        )
      ) {
        history.go(0);
      } else {
        history.push("/");
      }
    }
  };

  if (cards.length < 3) {
    return (
      <div>
        <h2>Not enough cards.</h2>
        <p>
          You need at least 3 cards to study. There are {cards.length} cards in
          this deck.
        </p>
        <AddCardsBtn deckId={deckId} />
      </div>
    );
  }

  if (isFrontOfCard) {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            Card {cardCount} of {cards.length}
          </h5>
          <p className="card-text">{currentCard.front}</p>
          <FlipBtn setIsFrontOfCard={setIsFrontOfCard} />
        </div>
      </div>
    );
  } else {
    return (
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">
            Card {cardCount} of {cards.length}
          </h5>
          <p className="card-text">{currentCard.back}</p>
          <FlipBtn setIsFrontOfCard={setIsFrontOfCard} />
          <NextBtn handleNextCard={handleNextCard} />
        </div>
      </div>
    );
  }
}

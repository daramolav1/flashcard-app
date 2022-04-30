import CreateDeckBtn from "./CreateDeckBtn";
import ViewBtn from "./ViewBtn";
import StudyBtn from "./StudyBtn";
import DeleteBtn from "./DeleteBtn";
import React, { useEffect, useState } from "react";
import { listDecks } from "../../utils/api";

export default function Home() {
  const [decks, setDecks] = useState([]);

  useEffect(() => {
    async function loadDecks() {
      const response = await listDecks();
      const decksFromAPI = await response;
      setDecks(decksFromAPI);
    }

    loadDecks();
  }, []);

  return (
    <div>
      <CreateDeckBtn />
      {decks.map((deck, index) => {
        return (
          <div className="card" key={index}>
            <div className="card-body">
              <div className="d-flex justify-content-between">
                <h5 className="card-title">{deck.name}</h5>
                <h6 className="card-subtitle">{deck.cards.length} cards</h6>
              </div>
              <p className="card-text">{deck.description}</p>
              <div className="d-flex">
                <div className="mr-auto">
                  <ViewBtn deck={deck} />
                  <StudyBtn deck={deck} />
                </div>
                <DeleteBtn deck={deck} />
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

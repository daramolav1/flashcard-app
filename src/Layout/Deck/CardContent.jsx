import EditCardBtn from "./CardContentBtn/EditCardBtn";
import DeleteCardBtn from "./CardContentBtn/DeleteCardBtn";
import React from "react";

export default function CardContent({ cards }) {
  return (
    cards.length > 0 && (
      <div>
        <h1>Cards</h1>
        {cards.map((card, index) => {
          return (
            <div className="card" key={index}>
              <div className="card-body">
                <div className="d-flex justify-content-between">
                  <p className="card-text col-md-6">{card.front}</p>
                  <p className="card-text col-md-6">{card.back}</p>
                </div>
                <div className="d-flex justify-content-end">
                  <EditCardBtn card={card} />
                  <DeleteCardBtn card={card} />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    )
  );
}

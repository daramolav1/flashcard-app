import React from "react";
import CreateDeckForm from "./CreateDeckForm";
import CreateDeckNavBar from "./CreateDeckNavBar";

export default function CreateDeck() {
  return (
    <div>
      <CreateDeckNavBar />
      <h1>Create Deck</h1>
      <CreateDeckForm />
    </div>
  );
}

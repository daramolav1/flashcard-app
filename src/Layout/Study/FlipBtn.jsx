import React from "react";

export default function FlipBtn({ setIsFrontOfCard }) {
  const handleFlip = () => {
    setIsFrontOfCard((side) => !side);
  };

  return (
    <button
      className="btn btn-secondary mr-2"
      type="button"
      onClick={handleFlip}
    >
      Flip
    </button>
  );
}

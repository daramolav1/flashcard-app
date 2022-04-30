import React from "react";

export default function NextBtn({ handleNextCard }) {
  return (
    <button className="btn btn-primary" type="button" onClick={handleNextCard}>
      Next
    </button>
  );
}

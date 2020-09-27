import React from "react";

const FeedbackButtons = ({ onUpdateClick }) => {
  return (
    <div>
      <button type="button" onClick={() => onUpdateClick("good")}>
        Good
      </button>
      <button type="button" onClick={() => onUpdateClick("neutral")}>
        Neutral
      </button>
      <button type="button" onClick={() => onUpdateClick("bad")}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackButtons;

import React from "react";

const FeedbackButtons = ({ onGoodClick, onNeutralClick, onBadClick }) => {
  return (
    <div>
      <button type="button" onClick={onGoodClick}>
        Good
      </button>
      <button type="button" onClick={onNeutralClick}>
        Neutral
      </button>
      <button type="button" onClick={onBadClick}>
        Bad
      </button>
    </div>
  );
};

export default FeedbackButtons;

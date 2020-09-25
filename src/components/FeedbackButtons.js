import React from "react";

const FeedbackButtons = ({
  title,
  onGoodClick,
  onNeutralClick,
  onBadClick,
}) => {
  return (
    <div>
      <h2>{title}</h2>
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

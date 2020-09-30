import React from "react";
import PropTypes from "prop-types";

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
FeedbackButtons.propTypes = {
  onUpdateClick: PropTypes.func.isRequired,
};

export default FeedbackButtons;

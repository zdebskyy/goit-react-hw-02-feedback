import React from "react";
import PropTypes from "prop-types";

const Statistics = ({ stats, total, feedbackValue }) => {
  const { good, neutral, bad } = stats;

  return (
    <>
      <span>Good :{good}</span>
      <br></br>
      <span>Neutral: {neutral}</span>
      <br></br>
      <span>Bad : {bad}</span>
      <br></br>
      <span>Total : {total}</span>
      <br></br>
      <span>Positive feedback : {!feedbackValue ? 0 : feedbackValue} % </span>
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.shape({
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
  }).isRequired,

  total: PropTypes.number.isRequired,
  feedbackValue: PropTypes.number.isRequired,
};

export default Statistics;

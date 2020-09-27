import React from "react";

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

export default Statistics;

import React from "react";

const FeedbackField = ({ title, stats }) => {
  const { good, neutral, bad } = stats;

  return (
    <>
      <h2>{title}</h2>
      <span>Good :{good}</span>
      <br></br>
      <span>Neutral: {neutral}</span>
      <br></br>
      <span>Bad :{bad}</span>
    </>
  );
};

export default FeedbackField;

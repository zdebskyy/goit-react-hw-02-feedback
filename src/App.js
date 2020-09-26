import React, { Component } from "react";
import FeedbackButtons from "./components/FeedbackButtons";
import FeedbackField from "./components/FeedbackField";
import SectionTitle from "./components/SectionTitle";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, el) => {
      acc += el;
      return acc;
    }, 0);
  };

  countPositiveFeedbackPercentage = (total, positive) => {
    return Math.round((positive * 100) / total);
  };

  handleBtnGood = () => {
    this.setState((prevState) => {
      return {
        good: prevState.good + 1,
      };
    });
  };
  handleBtnNeutral = () => {
    this.setState((prevState) => {
      return {
        neutral: prevState.neutral + 1,
      };
    });
  };
  handleBtnBad = () => {
    this.setState((prevState) => {
      return {
        bad: prevState.bad + 1,
      };
    });
  };

  render() {
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage(
      total,
      this.state.good
    );
    return (
      <div>
        <SectionTitle title="Leave a feedback!">
          <FeedbackButtons
            onGoodClick={this.handleBtnGood}
            onNeutralClick={this.handleBtnNeutral}
            onBadClick={this.handleBtnBad}
          />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {total > 0 ? (
            <FeedbackField
              stats={this.state}
              total={total}
              feedbackValue={positive}
            />
          ) : (
            <p>No feedback given</p>
          )}
        </SectionTitle>
      </div>
    );
  }
}

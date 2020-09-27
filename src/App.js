import React, { Component } from "react";
import FeedbackButtons from "./components/FeedbackButtons";
import Statistics from "./components/Statistics";
import SectionTitle from "./components/SectionTitle";
import Notification from "./components/Notification";

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
    const { good, neutral, bad } = this.state;
    const total = this.countTotalFeedback();
    const positive = this.countPositiveFeedbackPercentage(total, good);
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
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={total}
              feedbackValue={positive}
            />
          ) : (
            <Notification message={"No feedback given"} />
          )}
        </SectionTitle>
      </div>
    );
  }
}

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

  voteUpdate = (type) => {
    this.setState((prevState) => {
      return {
        [type]: prevState[type] + 1,
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
          <FeedbackButtons onUpdateClick={this.voteUpdate} />
        </SectionTitle>
        <SectionTitle title="Statistics">
          {total > 0 ? (
            <Statistics
              stats={this.state}
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

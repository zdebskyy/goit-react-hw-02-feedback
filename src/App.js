import React, { Component } from "react";
import FeedbackButtons from "./components/FeedbackButtons";
import FeedbackField from "./components/FeedbackField";

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
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
  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };
  render() {
    return (
      <div>
        <FeedbackButtons
          title="Leave a feedback!"
          onGoodClick={this.handleBtnGood}
          onNeutralClick={this.handleBtnNeutral}
          onBadClick={this.handleBtnBad}
        />
        <FeedbackField title="Statistics" stats={this.state} />
      </div>
    );
  }
}

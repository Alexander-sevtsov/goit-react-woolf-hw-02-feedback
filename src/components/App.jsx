import React, { Component } from 'react';
import FeedbackOptions from './feedbackOptions/FeedbackOptions';
import Section from './section/Section';
import Statistics from './statistics/Statistics';
import css from '../App.module.css';
import Notification from './notification/Notification';

export default class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleStatisticsReaction = option => {
    this.setState(prevState => {
      return { [option]: prevState[option] + 1 };
    });
  };

  countTotalFeedback = () => {
    return Object.values(this.state).reduce((acc, value) => acc + value, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const totalFeedback = this.countTotalFeedback();
    return totalFeedback > 0
      ? Math.round((this.state.good / totalFeedback) * 100)
      : 0;
  };

  render() {
    const totalFeedback = this.countTotalFeedback();
    const PositivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div className={css.container}>
        <Section title="Please leave feedback">
          <FeedbackOptions
            feedbackOptions={Object.keys(this.state)}
            handleStatisticsReaction={this.handleStatisticsReaction}
          />
        </Section>
        {totalFeedback ? (
          <>
            <Section title="Statistics">
              <Statistics
                good={this.state.good}
                neutral={this.state.neutral}
                bad={this.state.bad}
                total={totalFeedback}
                positivePercentage={PositivePercentage}
              />
            </Section>
          </>
        ) : (
          <Notification title={'There is no feedback'} />
        )}
      </div>
    );
  }
}

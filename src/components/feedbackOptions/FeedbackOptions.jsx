import React from 'react';
import css from './FeedbackOptions.module.css';

const FeedbackOptions = ({ feedbackOptions, handleStatisticsReaction }) => {
  return (
    <>
      {feedbackOptions.map(option => (
        <button
          onClick={() => handleStatisticsReaction(option)}
          className={css.btn}
          type="button"
          name={option}
          key={option}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;

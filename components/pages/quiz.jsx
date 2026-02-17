import React, { useState } from "react";
import "../../assets/styles/quiz.css";

const Quiz = ({
  question,
  selectedOption,
  onOptionChange,
  onSubmit,
  current,
  total,
}) => {
  const [locked, setLocked] = useState(false);

  const handleClick = (option) => {
    if (!locked) {
      onOptionChange({ target: { value: option } });
      setLocked(true);
    }
  };

  return (
    <div className="quiz-container">
      <div className="quiz-box">
        <h2>
          Question {current + 1} / {total}
        </h2>

        <h3 className="quiz-question">{question.question}</h3>

        <div className="quiz-options">
          {question.options.map((option, index) => {
            let className = "option-btn";

            if (locked) {
              if (option === question.answer) className += " correct";
              else if (option === selectedOption) className += " wrong";
            }

            return (
              <button
                key={index}
                className={className}
                onClick={() => handleClick(option)}
              >
                {option}
              </button>
            );
          })}
        </div>

        <button
          className="quiz-submit"
          onClick={() => {
            setLocked(false);
            onSubmit();
          }}
          disabled={!selectedOption}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Quiz;

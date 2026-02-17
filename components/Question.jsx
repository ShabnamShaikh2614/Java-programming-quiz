import React, { useState } from "react";

const Question = ({ question, selectedOption, onOptionChange, onSubmit }) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true); 
    onSubmit();         
  };

  return (
    <div className="QuestionBody">
      <div className="QuestionBox">
        <h3>Question {question.id}</h3>
        <h5 className="mt-2">{question.question}</h5>

        <form onSubmit={handleSubmit}>
          <Options
            options={question.options}
            selectedOption={selectedOption}
            onOptionChange={onOptionChange}
            submitted={submitted}    
          />

          <button type="submit" className="btn btn-primary mt-2">
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};
export default Question;

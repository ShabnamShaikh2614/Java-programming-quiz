import React, { Component } from 'react';

class Options extends Component {
    render() {
        const { options, selectedOption, onOptionChange } = this.props;

        return (
          <div className="options">
  {options.map((option, index) => {
    const isSelected = selectedOption === option;
    const isSubmitted = submitted; 
    const isCorrect = isSubmitted && isSelected;

    return (
      <div
        key={index}
        className={`option-box 
            ${isSelected ? "selected" : ""} 
            ${isCorrect ? "correct" : ""}`}
        onClick={() => onOptionChange({ target: { value: option } })}
      >
        {option}
      </div>
    );
  })}
</div>


              
        );
    }
}

export default Options;
import React from "react";
import "../../assets/styles/scorecard.css";

const Scorecard = ({ score, total, onRestart, onHome }) => {
  const wrong = total - score;
  const accuracy = Math.round((score / total) * 100);

  return (
    <div className="score-body">
      <div className="score-card">
        <h1>Quiz Finished 🎉</h1>

    
        <div className="accuracy-wrapper">
          <div
            className="accuracy-circle"
            style={{ "--percent": `${accuracy}%` }}
          >
            <div className="accuracy-inner">{accuracy}%</div>
          </div>
        </div>

        {/* Stats */}
        <div className="stats">
          <div className="stat-box">
            <h3>Correct</h3>
            <p>{score}</p>
          </div>

          <div className="stat-box">
            <h3>Wrong</h3>
            <p>{wrong}</p>
          </div>

          <div className="stat-box">
            <h3>Total</h3>
            <p>{total}</p>
          </div>
        </div>

        <div className="final-score">
          Your Score: {score} / {total}
        </div>

        {/* Actions */}
        <div className="score-actions">
          <button onClick={onRestart}>Play Again</button>
        </div>
        <div className="score-home">
          <button onClick={onHome}>Home</button>
        </div>
      </div>
    </div>
  );
};

export default Scorecard;

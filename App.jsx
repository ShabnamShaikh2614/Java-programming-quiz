import React, { Component } from "react";
import Home from "./components/pages/home.jsx";
import About from "./components/pages/about.jsx";
import Quiz from "./components/pages/quiz.jsx";
import Scorecard from "./components/pages/scorecard.jsx";
import qBank from "./components/Questionbank";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showHome: true,
      showAbout: false,
      questionBank: qBank,
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      quizEnd: false,
    };
  }

  startQuiz = () => {
    this.setState({ showHome: false, showAbout: false });
  };

  openAbout = () => {
    this.setState({ showHome: false, showAbout: true });
  };

  goHome = () => {
    this.setState({ showHome: true, showAbout: false });
  };

  handleOptionChange = (e) => {
    this.setState({ selectedOption: e.target.value });
  };

  handleSubmit = () => {
    this.checkAnswer();
    this.nextQuestion();
  };

  checkAnswer = () => {
    const { questionBank, currentQuestion, selectedOption, score } = this.state;

    if (selectedOption === questionBank[currentQuestion].answer) {
      this.setState({ score: score + 1 });
    }
  };

  nextQuestion = () => {
    const { currentQuestion, questionBank } = this.state;

    if (currentQuestion + 1 < questionBank.length) {
      this.setState({
        currentQuestion: currentQuestion + 1,
        selectedOption: "",
      });
    } else {
      this.setState({ quizEnd: true });
    }
  };

  restartQuiz = () => {
    this.setState({
      showHome: true,
      showAbout: false,
      currentQuestion: 0,
      selectedOption: "",
      score: 0,
      quizEnd: false,
    });
  };

  render() {
    const {
      showHome,
      showAbout,
      questionBank,
      currentQuestion,
      selectedOption,
      score,
      quizEnd,
    } = this.state;

    return (
      <>
        {showHome && <Home onStart={this.startQuiz} onAbout={this.openAbout} />}

        {showAbout && (
          <About
            onHome={this.goHome}
            onStart={this.startQuiz}
            onRestart={this.restartQuiz}
          />
        )}

        {!showHome && !showAbout && !quizEnd && (
          <Quiz
            question={questionBank[currentQuestion]}
            selectedOption={selectedOption}
            onOptionChange={this.handleOptionChange}
            onSubmit={this.handleSubmit}
            current={currentQuestion}
            total={questionBank.length}
          />
        )}

        {quizEnd && (
          <Scorecard
            score={score}
            total={questionBank.length}
            onRestart={this.restartQuiz}
            onHome={this.goHome}
          />
        )}
      </>
    );
  }
}

export default App;

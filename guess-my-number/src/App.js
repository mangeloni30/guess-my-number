import { useState, useEffect } from "react";
import styled from "styled-components";
import './App.css';
import Button from "./components/Button";
import Range from "./components/Range";
import Form from "./components/Form";
import Score from "./components/Score";

const AppWrapper = styled.div`
  background: ${props => props.backgroundColor};
  height: 100em;
  padding: 20px;
`;

const ButtonRangeWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const TitleWrapper = styled.div`
  color: white;
  margin-bottom: 10%;
`;

const BorderWrapper = styled.div`
  border-bottom: 5px solid white;
  display: flex;
  flex-direction: column;
`;

const QuestionWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: transparent;
  heigth: 5%;
  div{
    background: white;
    width: 20px;
    height: 20px;
    transform: translateY(12px);
  }
`;

/**
 * Hook responsible of render the main App
 * @author Martin Angeloni
 */
function App() {
  const [isNumberGuessed, setIsNumberGuessed] = useState(false);
  const [score, setScore] = useState();
  const [isFinishedUnsuccess, setIsFinishedUnsuccess] = useState(false);
  const [isFinished, setIsFinished] = useState(false);
  const [onFinishedPhrase, setOnFinishedPhrase] = useState("");
  const [numberToGuess, setNumberToGuess] = useState();
  const [backgroundColor, setBackGroundColor] = useState();

  /**
   * @method useEffect
   * React Hook method
   * @description responsible of set the number to guess
   * and the score once the component is rendered
   * @author Martin Angeloni
   */
  useEffect(() => {
    setScore(20);
    setNumberToGuess(Math.floor(Math.random() * 20) + 1);
    setBackGroundColor("linear-gradient(#28313b, #485461)");
  }, [])

  /**
   * @method useEffect
   * React Hook method
   * @description responsible of check the score
   * @author Martin Angeloni
   */
  useEffect(() => {
    if (score < 1) {
      setIsFinishedUnsuccess(true);
      setIsFinished(true);
      setBackGroundColor("linear-gradient(#a71d31, #3f0d12)");
    }
  }, [score])

  /**
   * @method useEffect
   * React Hook method
   * @description responsible of check if its finished and
   * set the correct phrase to show
   * @author Martin Angeloni
   */
  useEffect(() => {
    if (isFinished) {
      const finalPhrase = isFinishedUnsuccess ? "You loosed :(" : "Congrats! You guessed!!";
      setOnFinishedPhrase(finalPhrase);
    }
  }, [isFinished])

  /**
   * @method onGuessNumber
   * @description responsible of
   * check if the number was guessed or not
   * @param {Boolean} isNumberGuessed
   * @author Martin Angeloni 
   */
  const onGuessNumber = (isNumberGuessed) => {
    if (isNumberGuessed) {
      setIsFinished(true);
      setIsNumberGuessed(true);
      setBackGroundColor("linear-gradient(#074C00, #42A341)");
    } else {
      setScore(score - 1);
    }
  }

  /**
   * @method onAgain
   * @description responsible of reset the number
   * to guess and the score
   * @author Martin Angeloni
  */
  const onAgain = () => {
    setNumberToGuess(Math.floor(Math.random() * 20) + 1)
    setIsFinishedUnsuccess(false);
    setIsFinished(false);
    setScore(20);
    setBackGroundColor("linear-gradient(#28313b, #485461)");
  }

  return (
    <AppWrapper className="App" isNumberGuessed={isNumberGuessed} backgroundColor={backgroundColor} isFinishedUnsuccess={isFinishedUnsuccess}>
      <ButtonRangeWrapper>
        <Button disabled={!isFinished} onAgain={onAgain}/>
        <Range />
      </ButtonRangeWrapper>
      <h1>Guess my number!</h1>
      <TitleWrapper>
        <h1>{onFinishedPhrase}</h1>
      </TitleWrapper>
      <BorderWrapper>
        <div />
        <QuestionWrapper>
          <div>
            ?
          </div>
        </QuestionWrapper>
      </BorderWrapper>
      <Form onGuessNumber={onGuessNumber} isFinished={isFinished} numberToGuess={numberToGuess}/>
      <Score score={score}/>
    </AppWrapper>
  );
}

export default App;

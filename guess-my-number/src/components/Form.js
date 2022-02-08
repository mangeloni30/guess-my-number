import { useState , useEffect} from "react";
import { useForm } from "react-hook-form";
import styled from "styled-components";
import Button from "./Button";

const FormWrapper = styled.div`
  margin-top: 10%;
`;

const FormContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin-left: 30%;
  margin-right: 30%;
  input{
    margin-bottom: 5%;
  }
  input{
    height: 25px;
    border-radius: 10px;
    border: 0.5px solid grey;
  }
  span{
    margin-bottom: 20px;
    color: #A52A2A;
  }
`;

/**
 * @method Form
 * Hook responsible of render the entire form
 * @author angelonimartin90@gmail.com
 */
function Form({ onGuessNumber, isFinished, numberToGuess }) {
  // const [number, setNumber] = useState();

  // useEffect(() => {
  //   setNumber(Math.floor(Math.random() * 20) + 1)
  // }, [])

  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = ({ guessNumber }) => {
    const numberGuessed = parseInt(guessNumber, 10);
    if (numberGuessed === numberToGuess) {
      onGuessNumber(true);
    } else {
      onGuessNumber(false);
    }
  }
  console.log("numberToGuess ", numberToGuess)
  return (
    <FormWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormContentWrapper>
          <input
            type="number"
            {...register("guessNumber", { required: true })}
            max={20}
            min={0}
          />
          {errors.guessNumber && <span>This field is required</span>}
          <Button type="submit" width="100%" disabled={isFinished}>Check!</Button>
        </FormContentWrapper>
      </form>
    </FormWrapper>
  );
}

export default Form;

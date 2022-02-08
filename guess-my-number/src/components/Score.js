import styled from "styled-components";

const ScoreWrapper = styled.div`
  color: white;
`;

/**
 * @method Score
 * Hook responsible of render the Score component
 * @author angelonimartin90@gmail.com
 */
function Score({ score }) {
  return (
    <ScoreWrapper>
      <h3>Start guessing...</h3>
      <h3>{`Score: ${score}`}</h3>
    </ScoreWrapper>
  );
}

export default Score;

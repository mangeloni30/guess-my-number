import styled from "styled-components";

const ButtonWrapper = styled.button`
  width: ${props => props.width || "20%"};
  height: 50px;
  border-radius: 3px;
  background: linear-gradient(orange, #fdb777);
  transition: 1s ease;
  box-shadow: rgb(38, 57, 77) 0px 20px 30px -10px;
  border-radius: 10px;
  &:hover{
    cursor: pointer;
    transform: translateY(-10px);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
`;


function Button({ children = "Again!", type = "button", width, disabled, onAgain }) {
  return (
    <ButtonWrapper type={type} width={width} disabled={disabled} onClick={() => onAgain && onAgain()}>
      {children}
    </ButtonWrapper>
  );
}

export default Button;

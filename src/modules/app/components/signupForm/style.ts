import styled from "styled-components";

export const SignupForm = styled.form`
  padding: 30px;
  background-color: white;
`;
export const Label = styled.label`
  margin-bottom: 10px;
  display: block;
  font-size: 18px;
`;
export const Input = styled.input`
  font-size: 18px;
  margin-bottom: 20px;
`;
export const SignupHeading = styled.h1`
  color: #444;
`;
export const SignupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 100vh;
  background-color: lightgray;
`;
export const SignupElementContainer = styled.div``;
export const SubmitButton = styled.button`
  cursor: pointer;
  font-size: 20px;
  border-radius: 50px;
  padding: 10px 80px;
  border: none;
  margin-top: 20px;

  transition: 0.3s ease;
  &:hover {
    color: lightgray;
    background-color: black;
    transform: translate(3px, -3px);
  }
`;
export const ErrorContainer = styled.div`
  color: red;
  max-width: 170px;
`;
export const Br = styled.br``;

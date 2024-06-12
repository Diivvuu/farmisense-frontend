import styled from "styled-components";

const Button = styled.button`
  border: none;
  background-color: var(--color1);
  color: var(--color3);
  padding: 10px 20px;
  cursor: pointer;
  transition: all 0.15s ease-in-out;

  &:hover {
    transform: scale(0.9);
  }
`;

export default Button;

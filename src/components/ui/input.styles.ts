import styled from "styled-components";

interface StyledInputProps {
  $variant?: "primary" | "secondary";
}

export const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: black;
  font-weight: 500;
`;

export const StyledInput = styled.input<
  StyledInputProps & React.InputHTMLAttributes<HTMLInputElement>
>`
  border: 1px solid
    ${({ $variant }) => ($variant === "secondary" ? "#6c757d" : "#007bff")};
  border-radius: 5px;
  padding: 10px;
  margin-top: 5px;
  outline: none;

  &:focus {
    border: 1px solid
      ${({ $variant }) => ($variant === "secondary" ? "#6c757d" : "#007bff")};
  }
`;

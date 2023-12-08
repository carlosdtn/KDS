import styled from "styled-components";

interface StyledSelectProps {
  $variant?: "primary" | "secondary";
}

export const SelectGroup = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Label = styled.label`
  color: black;
  font-weight: 500;
`;

export const StyledSelect = styled.select<
  StyledSelectProps & React.SelectHTMLAttributes<HTMLSelectElement>
>`
  padding: 9px;
  margin-top: 5px;
  outline: none;
  border-radius: 4px;
  border: 1px solid
    ${({ $variant }) => ($variant === "secondary" ? "#6c757d" : "#007bff")};

  &:focus {
    border: 1px solid
      ${({ $variant }) => ($variant === "secondary" ? "#6c757d" : "#007bff")};
  }
`;

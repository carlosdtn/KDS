import styled from "styled-components";
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import {
  sharedStyles,
  primaryStyles,
  secondaryStyles,
  dangerStyles,
} from "./button.styles";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  variant?: "primary" | "secondary" | "danger";
}

const Button = styled.button<ButtonProps>`
  ${sharedStyles}
  ${({ variant }) => (variant === "primary" ? primaryStyles : null)}
  ${({ variant }) => (variant === "secondary" ? secondaryStyles : null)}
  ${({ variant }) => (variant === "danger" ? dangerStyles : null)}
`;

export default Button;

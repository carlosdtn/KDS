import styled, { css } from "styled-components";
import { DetailedHTMLProps, ButtonHTMLAttributes } from "react";
import { ButtonVariant } from "../../utils/types";

interface ButtonProps
  extends DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  $variant?: ButtonVariant;
}

export const sharedStyles = css`
  font-size: 16px;
  padding: 10px 20px;
  cursor: pointer;
  border-radius: 4px;
  border: none;
  outline: none;
  text-align: center;
  text-decoration: none;
  background-color: #e0e0e0;
  transition: background-color 0.3s ease;
  width: 100%;

  &:hover {
    filter: brightness(90%);
  }
`;

export const primaryStyles = css`
  background-color: #007bff;
  color: #fff;
`;

export const secondaryStyles = css`
  background-color: #e0e0e0;
  color: black;
`;

export const dangerStyles = css`
  background-color: #dc3545;
  color: #fff;
`;

export const HeaderButton = css`
  padding: 0.5rem;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid rgba(0, 0, 0, 0.1);
  transition: background-color 0.3s ease;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #e0e0e0;
  }

  @media (max-width: 768px) {
    min-width: 100%;
    display: flex;
    justify-content: flex-start !important;
  }
`;

export const disabledStyles = css`
  background-color: #e0e0e0;
  color: #bdbdbd;
  cursor: not-allowed;
`;

export const processStyles = css`
  background-color: var(--cd-in-process);
  color: black;
`;

export const completedStyles = css`
  background-color: var(--cd-completed);
  color: black;
`;

export const pendingStyles = css`
  background-color: var(--cd-pending);
  color: black;
`;

const StyledButton = styled.button<ButtonProps>`
  ${sharedStyles}
  ${({ $variant }) => ($variant === "primary" ? primaryStyles : null)}
  ${({ $variant }) => ($variant === "secondary" ? secondaryStyles : null)}
  ${({ $variant }) => ($variant === "danger" ? dangerStyles : null)}
  ${({ $variant }) => ($variant === "process" ? processStyles : null)}
  ${({ $variant }) => ($variant === "completed" ? completedStyles : null)}
  ${({ $variant }) => ($variant === "pending" ? pendingStyles : null)}
  ${({ $variant }) => ($variant === "disabled" ? disabledStyles : null)}
  ${({ $variant }) => ($variant === "header" ? HeaderButton : null)}
`;

export default StyledButton;

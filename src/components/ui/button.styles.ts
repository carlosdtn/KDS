import { css } from "styled-components";

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
  background-color: #6c757d;
  color: #fff;
`;

export const dangerStyles = css`
  background-color: #dc3545;
  color: #fff;
`;

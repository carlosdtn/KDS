import styled from "styled-components";

interface CardContentContainerProps {
  isCollapsed: boolean;
}

export const CardContentContainer = styled.div<CardContentContainerProps>`
  display: flex;
  flex-direction: column;
  margin: 1rem;
  border: 1px solid #e0e0e0;
  border-radius: 0.2rem;
  cursor: pointer;
  transition: background-color 0.3s ease;
  height: ${({ isCollapsed }) => (isCollapsed ? "10rem" : "auto")};
  overflow-y: auto;
`;

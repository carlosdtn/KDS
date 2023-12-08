import styled, { css } from "styled-components";
import { getOrderStatusColor } from "../../../utils/helpers";

interface CircleColoredProps {
  $status: string;
}

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: rgba(2, 0, 0, 0.15);
  border-bottom: 1px solid #e0e0e0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(20px);

  button {
    width: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    border: 1px solid rgba(0, 0, 0, 0.1);
  }
`;

export const TextButton = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: black;
  transition: color 0.3s ease;
`;

export const GroupedTabs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
  padding: 0.5rem;
  width: rem;
  overflow-inline: auto;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const CircleColored = styled.span<CircleColoredProps>`
  width: 0.8rem;
  height: 0.8rem;
  border-radius: 50%;
  background-color: ${({ $status }) =>
    css`var(${getOrderStatusColor($status)})`};
`;

export const FilterTitle = styled.span`
  font-size: 1rem;
  font-weight: 700;
  color: black;
`;

export const GroupedContent = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

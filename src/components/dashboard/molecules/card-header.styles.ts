import styled from "styled-components";

interface WrittenStatusProps {
  color: string;
}

export const CardOrderHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 0.8rem;
  border-bottom: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
`;

export const CardOrderGroupedInfo = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background: linear-gradient(180deg, #292929 0%, #767676 100%);
  border-radius: 1rem;
  gap: 0.1rem;
  padding-top: 0.1rem;
  padding-bottom: 0.1rem;
  padding-left: 0.4rem;
  padding-right: 0.4rem;
  width: fit-content;
`;

export const TableNumber = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: #fff;
`;

export const TakenTime = styled.span`
  font-size: 1rem;
  font-weight: bold;
  color: black;
`;

export const CardOrderGroupedOptions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;

  svg {
    cursor: pointer;
    transition: stroke 0.3s ease;
  }
  svg:hover {
    stroke: #007bff;
  }
`;

export const WrittenStatus = styled.span<WrittenStatusProps>`
  font-size: 0.9rem;
  font-weight: bold;
  color: var(${({ color }) => color});
`;

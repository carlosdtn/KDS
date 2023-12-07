import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  background-color: rgba(255, 255, 255, 0.5);
  border-bottom: 1px solid #e0e0e0;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
  position: sticky;
  top: 0;
  backdrop-filter: blur(10px);

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

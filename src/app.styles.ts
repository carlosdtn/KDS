import styled, { createGlobalStyle } from "styled-components";

export const DashboardPageContainer = styled.main`
  display: flex;
  flex-direction: row;
  height: 100%;
  gap: 1rem;
  padding: 1rem;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const GlobalStyles = createGlobalStyle`
  :root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    --danger-color: #dc3545;

    --cd-pending: #caca60;
    --cd-in-process: #80cbc4; 
    --cd-completed: #81c784; 
    --cd-late: #dcb185;
    --cd-cancelled: #ef9a9a; 
    --cd-default: #e0e0e0;
  }
  
  body {
    font-family: 'Inter', sans-serif;
    margin: 0;
    padding: 0;
    background-color: #ECECEC;
  }
`;

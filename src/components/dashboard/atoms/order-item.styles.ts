import styled from "styled-components";

export const OrderItemContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem;
  border-bottom: 1px solid #e0e0e0;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const ProductName = styled.span`
  font-weight: 500;
`;

export const ProductQuantity = styled.span`
  background-color: black;
  border-radius: 100%;
  font-weight: 700;
  color: white;
  width: 1.2rem;
  height: 1.2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

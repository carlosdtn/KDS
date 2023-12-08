import styled from "styled-components";

export const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(15px);
  transition: opacity 0.3s ease;
`;

export const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 8px;
  width: 20rem;
  height: auto;
  position: relative;

  @media (max-width: 768px) {
    width: 80%;
  }
`;

export const CloseButton = styled.button`
  position: absolute;
  width: auto;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.5rem;
  border: none;
  border-radius: 8px;
  right: 1rem;

  &:hover {
    background-color: #e0e0e0;
  }
`;

export const OrderForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

export const InlineInputs = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  gap: 0.5rem;

  input[name="product"] {
    width: 100%;
  }
  input[name="quantity"] {
    width: 40%;
  }
`;

export const OrderPreview = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  border: 1px solid rgba(0, 0, 0, 0.1);
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 0.5rem;
  height: 5rem;
  overflow: auto;
`;

export const ValidationMessage = styled.span`
  font-size: 0.8rem;
  color: red;
`;

import styled, { css } from "styled-components";
import { getOrderStatusColor } from "../../../utils/helpers";
import { OrderStatus } from "../../../utils/types";

interface CardOrderContainerProps {
  isCollapsed: boolean;
  orderStatus: OrderStatus;
}

const baseStyles = css`
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  border: 1px solid #e0e0e0;
  transition: height 0.3s ease;
`;

export const CardOrderContainer = styled.div<CardOrderContainerProps>`
  ${baseStyles}
  background-color: #fff;
  height: ${({ isCollapsed }) => (isCollapsed ? "17.5rem" : "auto")};
  padding-bottom: 1rem;
  overflow: hidden;
  min-width: 20rem;
  border-top: 10px solid
    var(${({ orderStatus }) => getOrderStatusColor(orderStatus)});
`;

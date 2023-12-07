import { getOrderStatusColor } from "../../../utils/helpers";
import { OrderStatus } from "../../../utils/types";
import styled from "styled-components";

interface CircleColoredStatusProps {
  status: OrderStatus;
}

export const OrderTypeLegendContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  padding: 0.5rem;
  border-radius: 8px;
  background-color: #fff;
  border: 1px solid #e0e0e0;
  box-shadow: 0 2px 4px 0 rgba(0, 0, 0, 0.1);
  width: 20rem;
  min-height: 15rem;
`;

export const CircleColoredStatus = styled.div<CircleColoredStatusProps>`
  width: 1rem;
  height: 1rem;
  border-radius: 50%;
  background-color: var(${({ status }) => getOrderStatusColor(status)});
  color: #000;
`;

export const OrderTypeName = styled.span`
  font-size: 1rem;
  color: #000;
`;

export const OrderTypeItemGroup = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 0.5rem;
`;

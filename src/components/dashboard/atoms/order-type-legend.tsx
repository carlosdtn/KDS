import { OrderStatus } from "../../../utils/types";
import {
  CircleColoredStatus,
  OrderTypeItemGroup,
  OrderTypeLegendContainer,
  OrderTypeName,
} from "./order-type-legend.styles";

const OrderTypeLegend = () => {
  return (
    <OrderTypeLegendContainer>
      <h3>Estados de orden</h3>
      {Object.keys(OrderStatus).map((key, index) => {
        return (
          <OrderTypeItemGroup key={index}>
            <CircleColoredStatus
              status={OrderStatus[key as keyof typeof OrderStatus]}
            />
            <OrderTypeName>
              {OrderStatus[key as keyof typeof OrderStatus]}
            </OrderTypeName>
          </OrderTypeItemGroup>
        );
      })}
    </OrderTypeLegendContainer>
  );
};

export default OrderTypeLegend;

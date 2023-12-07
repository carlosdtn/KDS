import { Order } from "../../../utils/types";
import {
  OrderItemContainer,
  ProductName,
  ProductQuantity,
} from "./order-item.styles";

interface OrderItemProps {
  items: Order["orderItems"][0];
}

const OrderItem: React.FC<OrderItemProps> = ({ items }) => {
  return (
    <OrderItemContainer>
      <ProductName>{items.product}</ProductName>
      <ProductQuantity>{items.quantity}</ProductQuantity>
    </OrderItemContainer>
  );
};

export default OrderItem;

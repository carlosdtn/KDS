import React from "react";
import { Order } from "../../../utils/types";
import { CardOrderContainer } from "./card-order.styles";
import CardHeader from "./card-header";
import CardContent from "./card-content";
import OrderItem from "../atoms/order-item";
import CardFooter from "./card-footer";
import Button from "../../ui/button";

interface CardOrderProps {
  isCollapsed: boolean;
  order: Order;
}

const CardOrder: React.FC<CardOrderProps> = ({ isCollapsed, order }) => {
  return (
    <CardOrderContainer
      isCollapsed={isCollapsed}
      orderStatus={order?.orderStatus}
    >
      <CardHeader order={order} isCollapsed={isCollapsed} />
      <CardContent isCollapse={isCollapsed}>
        {order?.orderItems.map((item, index) => (
          <OrderItem key={index} items={item} />
        ))}
      </CardContent>
      <CardFooter>
        <Button>Ordenar</Button>
        <Button variant="danger">Borrar</Button>
      </CardFooter>
    </CardOrderContainer>
  );
};

export default CardOrder;

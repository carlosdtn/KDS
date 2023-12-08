import React, { useEffect } from "react";
import { changeStatus, getData } from "../../../redux/features/order-slice";
import { useAppDispatch } from "../../../redux/hooks";
import { ButtonVariant, Order, OrderStatus } from "../../../utils/types";
import Button from "../../ui/button";
import OrderItem from "../atoms/order-item";
import CardContent from "./card-content";
import CardFooter from "./card-footer";
import CardHeader from "./card-header";
import { CardOrderContainer } from "./card-order.styles";

interface CardOrderProps {
  isCollapsed: boolean;
  order: Order;
}

const CardOrder: React.FC<CardOrderProps> = ({ isCollapsed, order }) => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getData());
  }, []);

  const handleCancelOrder = (id: number) => {
    dispatch(getData());
    dispatch(
      changeStatus({ tableNumber: id, orderStatus: OrderStatus.CANCELLED })
    );
  };

  const changeButtonStatus = () => {
    let variant: ButtonVariant | undefined;
    let text: string;

    switch (order?.orderStatus) {
      case OrderStatus.PENDING:
        variant = "process";
        text = "ORDENAR";
        break;
      case OrderStatus.IN_PROCESS:
        variant = "completed";
        text = "FINALIZAR";
        break;
      case OrderStatus.COMPLETED:
        variant = "disabled";
        text = "ENTREGADO";
        break;
      case OrderStatus.CANCELLED:
        variant = "disabled";
        text = "CANCELADO";
        break;
      default:
        variant = undefined;
        text = "";
        break;
    }

    return {
      variant,
      text,
    };
  };

  console.log("order", order);

  const handleDisableStyle = () => {
    return order?.orderStatus === OrderStatus.CANCELLED ||
      order?.orderStatus === OrderStatus.COMPLETED
      ? "disabled"
      : "danger";
  };

  const handleDisableButton = () => {
    return (
      order?.orderStatus === OrderStatus.CANCELLED ||
      order?.orderStatus === OrderStatus.COMPLETED
    );
  };

  const handleButtonAction = () => {
    dispatch(getData());
    dispatch(
      changeStatus({
        tableNumber: order?.tableNumber,
        orderStatus:
          order?.orderStatus === OrderStatus.PENDING
            ? OrderStatus.IN_PROCESS
            : OrderStatus.COMPLETED,
      })
    );
  };

  return (
    <CardOrderContainer
      $isCollapsed={isCollapsed}
      $orderStatus={order?.orderStatus}
    >
      <CardHeader order={order} isCollapsed={isCollapsed} />
      <CardContent isCollapse={isCollapsed}>
        {order?.orderItems.map((item, index) => (
          <OrderItem key={index} items={item} />
        ))}
      </CardContent>
      <CardFooter>
        <Button
          variant={changeButtonStatus()?.variant}
          onClick={() => handleButtonAction()}
          disabled={handleDisableButton()}
        >
          {changeButtonStatus()?.text}
        </Button>
        <Button
          variant={handleDisableStyle()}
          onClick={() => handleCancelOrder(order?.tableNumber)}
          disabled={handleDisableButton()}
        >
          CANCELAR
        </Button>
      </CardFooter>
    </CardOrderContainer>
  );
};

export default CardOrder;

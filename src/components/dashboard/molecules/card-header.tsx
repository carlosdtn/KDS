import { IconHash, IconArrowsDiagonal2 } from "@tabler/icons-react";
import {
  addZeros,
  formattedTime,
  getOrderStatusColor,
} from "../../../utils/helpers";
import { Order } from "../../../utils/types";
import {
  CardOrderGroupedInfo,
  CardOrderGroupedOptions,
  CardOrderHeader,
  TableNumber,
  TakenTime,
  WrittenStatus,
} from "./card-header.styles";

interface CardHeaderProps {
  order: Order;
  isCollapsed: boolean;
}

const CardHeader: React.FC<CardHeaderProps> = ({ order, isCollapsed }) => {
  return (
    <CardOrderHeader>
      <CardOrderGroupedInfo>
        <IconHash size={18} color="white" />
        <TableNumber>{addZeros(order?.tableNumber)}</TableNumber>
      </CardOrderGroupedInfo>
      <WrittenStatus color={getOrderStatusColor(order?.orderStatus)}>
        {order?.orderStatus}
      </WrittenStatus>
      <CardOrderGroupedOptions>
        <TakenTime>{formattedTime(order?.timeOrderTaken)}</TakenTime>
        {isCollapsed && <IconArrowsDiagonal2 size={18} color="black" />}
      </CardOrderGroupedOptions>
    </CardOrderHeader>
  );
};

export default CardHeader;

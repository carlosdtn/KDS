import { useLiveQuery } from "dexie-react-hooks";
import { db } from "../../../db/dexie-config";
import { useAppSelector } from "../../../redux/hooks";
import { Filter, Order } from "../../../utils/types";
import CardOrder from "../molecules/card-order";
import { CompactSectionContainer } from "./compact-section.styles";

const CompactOrderSection = () => {
  // const orders = useAppSelector((state) => state.order);
  const filter = useAppSelector((state) => state.filter);

  const orders = useLiveQuery(() =>
    db.orders.where("tableNumber").above(0).toArray()
  );

  const filterOrders = (orders: Order[] | undefined) => {
    if (!orders) return;
    if (filter.filter === Filter.ALL) return orders;
    return orders.filter((order) => {
      const orderStatusValue: string = order.orderStatus.toString();
      const filterValue: string = filter.filter.toString();
      return orderStatusValue === filterValue;
    });
  };

  return (
    <CompactSectionContainer>
      {filterOrders(orders)?.map((_, index) => (
        <CardOrder key={index} isCollapsed order={_} />
      ))}
    </CompactSectionContainer>
  );
};

export default CompactOrderSection;

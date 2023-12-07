import { dataOrders } from "../../../data/orders";
import CardOrder from "../molecules/card-order";
import { DetailedSectionContainer } from "./detailed-section.styles";

const DetailedOrderSection = () => {
  return (
    <DetailedSectionContainer>
      <CardOrder isCollapsed={false} order={dataOrders[0]} />
    </DetailedSectionContainer>
  );
};

export default DetailedOrderSection;

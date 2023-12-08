import { useAppSelector } from "../../../redux/hooks";
import CardOrder from "../molecules/card-order";
import { DetailedSectionContainer } from "./detailed-section.styles";

const DetailedOrderSection = () => {
  const expandedOrder = useAppSelector((state) => state.order);

  return (
    <DetailedSectionContainer>
      <CardOrder isCollapsed={false} order={expandedOrder[0]} />
    </DetailedSectionContainer>
  );
};

export default DetailedOrderSection;

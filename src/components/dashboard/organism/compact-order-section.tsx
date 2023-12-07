import { dataOrders } from "../../../data/orders";
import CardOrder from "../molecules/card-order";
import { CompactSectionContainer } from "./compact-section.styles";

const CompactOrderSection = () => {
  return (
    <CompactSectionContainer>
      {dataOrders.map((_, index) => (
        <CardOrder key={index} isCollapsed order={_} />
      ))}
    </CompactSectionContainer>
  );
};

export default CompactOrderSection;

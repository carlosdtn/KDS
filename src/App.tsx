import { DashboardPageContainer } from "./app.styles.ts";
import CompactOrderSection from "./components/dashboard/organism/compact-order-section";
import DetailedOrderSection from "./components/dashboard/organism/detailed-order-section";

function App() {
  return (
    <DashboardPageContainer>
      <DetailedOrderSection />
      <CompactOrderSection />
    </DashboardPageContainer>
  );
}

export default App;

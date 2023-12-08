import { useEffect } from "react";
import { DashboardPageContainer } from "./app.styles.ts";
import CompactOrderSection from "./components/dashboard/organism/compact-order-section";
import { dataOrders } from "./data/orders-seeder.ts";
import { db } from "./db/dexie-config.ts";
import { getData } from "./redux/features/order-slice.ts";
import { useAppDispatch } from "./redux/hooks.ts";

function App() {
  const dispatch = useAppDispatch();

  const getOrder = async () => {
    await db.initializeOrders(dataOrders);
  };

  useEffect(() => {
    getOrder();
    dispatch(getData());
  }, []);

  return (
    <DashboardPageContainer>
      {/* <DetailedOrderSection /> */}
      <CompactOrderSection />
    </DashboardPageContainer>
  );
}

export default App;

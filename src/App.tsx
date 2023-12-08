import { useEffect, useState } from "react";
import { DashboardPageContainer } from "./app.styles.ts";
import CompactOrderSection from "./components/dashboard/organism/compact-order-section";
import { dataOrders } from "./data/orders-seeder.ts";
import { db } from "./db/dexie-config.ts";
import { getData } from "./redux/features/order-slice.ts";
import { useAppDispatch, useAppSelector } from "./redux/hooks.ts";
import AddOrderModal from "./components/modal/organism/add-order-modal.tsx";

function App() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const option = useAppSelector((state) => state.options.isOpen);

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
      {option && <AddOrderModal isOpen={isOpen} setIsOpen={setIsOpen} />}
      <CompactOrderSection />
    </DashboardPageContainer>
  );
}

export default App;

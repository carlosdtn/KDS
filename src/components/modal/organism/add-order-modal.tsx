import { IconX } from "@tabler/icons-react";
import { Dispatch, SetStateAction, useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { dataDishes } from "../../../data/dishes-seeder";
import { toggleOptions } from "../../../redux/features/options-slice";
import { addOrder } from "../../../redux/features/order-slice";
import { useAppDispatch, useAppSelector } from "../../../redux/hooks";
import { Order, OrderStatus } from "../../../utils/types";
import OrderItem from "../../dashboard/atoms/order-item";
import Button from "../../ui/button";
import Input from "../../ui/input";
import Select from "../../ui/select";
import {
  CloseButton,
  InlineInputs,
  ModalContent,
  ModalOverlay,
  OrderForm,
  OrderPreview,
  ValidationMessage,
} from "./add-order-modal.styles";

interface OrderFormData {
  tableNumber: number;
  product: string;
  quantity: number;
}

interface OrderModalProps {
  setIsOpen: Dispatch<SetStateAction<boolean>>;
  isOpen: boolean;
}

interface OrderItem {
  product: string;
  quantity: number;
}

const AddOrderModal: React.FC<OrderModalProps> = () => {
  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors },
  } = useForm<OrderFormData>();
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const dispatch = useAppDispatch();
  const option = useAppSelector((state) => state.options.isOpen);

  const handleAddProduct = (data: OrderFormData) => {
    console.log("orderlist", data);
    const quantity = Number(data.quantity);
    if (quantity === 0) {
      return;
    } else {
      const existingOrderItemIndex = orderItems.findIndex(
        (item) => item.product === data.product
      );

      if (existingOrderItemIndex !== -1) {
        const updatedOrderItems = [...orderItems];
        updatedOrderItems[existingOrderItemIndex].quantity =
          Number(updatedOrderItems[existingOrderItemIndex].quantity) +
          Number(data.quantity);

        setOrderItems(updatedOrderItems);
      } else {
        const newOrderItem: OrderItem = {
          product: data.product,
          quantity: Number(data.quantity),
        };

        setOrderItems((prevItems) => [...prevItems, newOrderItem]);
      }
    }
  };

  const onSubmit: SubmitHandler<OrderFormData> = async (data) => {
    try {
      const currentDate = new Date().toISOString();

      const newOrder: Order = {
        tableNumber: Number(data.tableNumber),
        orderItems: orderItems,
        orderStatus: OrderStatus.PENDING,
        timeOrderTaken: currentDate,
        timeOrderInProcess: "",
        timeOrderCompleted: "",
      };
      console.log("newOrder form", newOrder);
      dispatch(addOrder(newOrder));
      dispatch(toggleOptions({ isOpen: false }));
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalOverlay>
      <ModalContent>
        <CloseButton
          onClick={() => dispatch(toggleOptions({ isOpen: !option }))}
        >
          <IconX size={20} color="black" />
        </CloseButton>
        <h2>Registrar Orden</h2>
        <OrderForm onSubmit={handleSubmit(onSubmit)}>
          <Input
            label="Número de mesa"
            variant="secondary"
            {...register("tableNumber", {
              required: "Campo requerido",
              min: { value: 1, message: "Mínimo 1" },
              max: { value: 40, message: "Máximo 20" },
            })}
            placeholder="Número de mesa"
          />
          {errors.tableNumber && (
            <ValidationMessage className="error">
              {errors.tableNumber.message}
            </ValidationMessage>
          )}
          <InlineInputs>
            <Select
              label="Plato"
              variant="secondary"
              options={dataDishes}
              {...register("product", {
                required: "Campo requerido",
              })}
            />
            <Input
              label="Cant."
              variant="secondary"
              {...register("quantity", {
                required: "Campo requerido",
              })}
              placeholder="Cantidad"
            />
            <Button type="button" onClick={() => handleAddProduct(getValues())}>
              Agregar
            </Button>
          </InlineInputs>
          <OrderPreview>
            {orderItems.map((item, index) => (
              <OrderItem key={index} items={item} />
            ))}
          </OrderPreview>
          <Button
            variant="secondary"
            type="submit"
            onClick={handleSubmit(onSubmit)}
          >
            Registrar Orden
          </Button>
        </OrderForm>
      </ModalContent>
    </ModalOverlay>
  );
};

export default AddOrderModal;

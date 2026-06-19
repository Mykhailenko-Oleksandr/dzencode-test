import { memo } from "react";
import OrderCard from "./OrderCard";
import type { Order } from "../types/order";

interface OrderListProps {
  orders: Order[];
  selectedOrder: Order | null;
  onSelectOrder: (order: Order) => void;
  onDeleteOrderClick: (
    e: React.MouseEvent<HTMLButtonElement>,
    order: Order,
  ) => void;
}

const OrderList = memo(function OrderList({
  orders,
  selectedOrder,
  onSelectOrder,
  onDeleteOrderClick,
}: OrderListProps) {
  return (
    <div className={"transition-all duration-300 w-100"}>
      <div className="d-flex flex-column gap-3">
        {orders.map((order) => (
          <OrderCard
            key={order.id}
            order={order}
            selectedOrder={selectedOrder}
            onSelect={onSelectOrder}
            onDelete={onDeleteOrderClick}
          />
        ))}
      </div>
    </div>
  );
});

export default OrderList;

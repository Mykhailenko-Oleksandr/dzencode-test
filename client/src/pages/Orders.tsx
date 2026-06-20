import { useEffect, useState, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../store";
import {
  setOrders,
  setLoading,
  setError,
  deleteOrder,
} from "../store/appSlice";
import { getOrders } from "../lib/api";
import OrderDetails from "../components/OrderDetails";
import OrderList from "../components/OrderList";
import type { Order } from "../types/order";
import type { ApiError } from "../types/apiError";
import PageTitle from "../components/PageTitle";
import Modal from "../components/Modal";

export default function Orders() {
  const dispatch = useAppDispatch();
  const { orders, loading, error } = useAppSelector((state) => state.app);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);

  const [orderToDelete, setOrderToDelete] = useState<{
    id: number;
    title: string;
  } | null>(null);

  useEffect(() => {
    const fetchOrders = async () => {
      dispatch(setLoading(true));
      try {
        const data = await getOrders();
        dispatch(setOrders(data));
      } catch (error: unknown) {
        const err = error as ApiError;
        dispatch(setError(err.message || "Помилка завантаження даних"));
      } finally {
        dispatch(setLoading(false));
      }
    };

    fetchOrders();
  }, [dispatch]);

  const handleClickDeleteOrder = useCallback(
    (e: React.MouseEvent<HTMLButtonElement>, order: Order) => {
      e.stopPropagation();
      setOrderToDelete({ id: order.id, title: order.title });
    },
    [],
  );

  const handleConfirmDelete = () => {
    if (orderToDelete) {
      dispatch(deleteOrder(orderToDelete.id));

      if (selectedOrder?.id === orderToDelete.id) {
        setSelectedOrder(null);
      }

      setOrderToDelete(null);
    }
  };

  if (loading) {
    return (
      <div className="text-center p-5" role="status">
        <div className="spinner-border text-success"></div>
      </div>
    );
  }

  if (error)
    return (
      <div className="alert alert-danger m-4" role="alert">
        {error}
      </div>
    );

  return (
    <section className="p-4 container-fluid">
      <PageTitle title="Приходи" count={orders.length} marginBottom="24px" />

      <div className="d-flex flex-nowrap gap-2">
        <OrderList
          orders={orders}
          selectedOrder={selectedOrder}
          onSelectOrder={setSelectedOrder}
          onDeleteOrderClick={handleClickDeleteOrder}
        />

        {selectedOrder && (
          <OrderDetails
            order={selectedOrder}
            onClose={() => setSelectedOrder(null)}
          />
        )}
      </div>

      <Modal
        isOpen={orderToDelete !== null}
        title="Ви впевнені, що хочете видалити цей прихід?"
        message={orderToDelete ? orderToDelete.title : ""}
        onClose={() => setOrderToDelete(null)}
        onConfirm={handleConfirmDelete}
      />
    </section>
  );
}

import { calculateTotal, formatDateString } from "../utils/orderUtils";
import type { Order } from "../types/order";

interface OrderCardProps {
  order: Order;
  selectedOrder: Order | null;
  onClick: () => void;
  onDeleteClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

export default function OrderCard({
  order,
  selectedOrder,
  onClick,
  onDeleteClick,
}: OrderCardProps) {
  const totals = calculateTotal(order.products);
  const dateInfo = formatDateString(order.date);
  const isSelected = selectedOrder?.id === order.id;

  return (
    <div
      tabIndex={0}
      role="button"
      aria-expanded={isSelected}
      className={`order-card bg-white rounded-3 shadow-sm p-3 d-flex gap-1 align-items-center justify-content-between position-relative ${
        isSelected ? "border-success bg-light" : ""
      }`}
      style={{
        cursor: "pointer",
        minWidth: "500px",
      }}
      onClick={onClick}
      onKeyDown={(e) => {
        if (e.key === "Enter") {
          e.preventDefault();
          onClick();
        }
      }}
    >
      {!selectedOrder && (
        <h3
          className="fw-semibold text-dark"
          style={{
            flex: "0 0 40%",
            minWidth: 0,
            fontSize: "15px",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxHeight: "75px",
          }}
          title={order.title}
        >
          {order.title}
        </h3>
      )}

      <div
        className="d-flex align-items-center flex-column gap-1"
        style={{ flexShrink: 0, minWidth: "70px" }}
      >
        <p className="fw-bold text-dark">{order.products.length}</p>
        <p className="text-muted small" style={{ fontSize: "12px" }}>
          {order.products.length === 1 ? "Продукт" : "Продукти"}
        </p>
      </div>

      <div className="text-center" style={{ flexShrink: 0 }}>
        <div className="text-muted small">{dateInfo.short}</div>
        <p className="text-secondary" style={{ fontSize: "11px" }}>
          {dateInfo.full}
        </p>
      </div>

      <div className="text-end " style={{ flexShrink: 0, minWidth: "90px" }}>
        <div className="text-muted small" style={{ fontSize: "12px" }}>
          {totals.usd} $
        </div>
        <p className="fw-semibold text-dark" style={{ fontSize: "14px" }}>
          {totals.uah} UAH
        </p>
      </div>

      <button
        type="button"
        className="btn btn-link text-muted p-2 delete-btn "
        aria-label={`Видалити прихід ${order.title}`}
        onClick={onDeleteClick}
      >
        🗑️
      </button>

      {selectedOrder && isSelected && (
        <div className="active-arrow-indicator" aria-hidden="true">
          ▶
        </div>
      )}
    </div>
  );
}

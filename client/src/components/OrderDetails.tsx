import type { Order } from "../types/order";

interface OrderDetailsProps {
  order: Order;
  onClose: () => void;
}

export default function OrderDetails({ order, onClose }: OrderDetailsProps) {
  return (
    <div className="bg-white rounded-3 shadow-sm p-3 border border-light position-relative h-100 w-100 ">
      <button
        type="button"
        className="btn-close position-absolute top-0 end-0 m-3 shadow-none"
        aria-label="Закрити деталі"
        onClick={onClose}
      ></button>

      <h3 className="fw-bold mb-3 text-dark pe-4" style={{ fontSize: "20px" }}>
        {order.title}
      </h3>
      <p className="text-muted small mb-4">Список продуктів у цьому приході:</p>

      <div
        className="d-flex flex-column gap-3"
        style={{ maxHeight: "calc(100vh - 280px)", overflowY: "auto" }}
      >
        {order.products.map((product) => (
          <div
            key={product.id}
            className="d-flex align-items-center justify-content-between p-2 border-bottom"
          >
            <div
              className="d-flex align-items-center gap-3"
              style={{ minWidth: 0, flex: 1 }}
            >
              <div className="bg-light p-2 rounded" style={{ flexShrink: 0 }}>
                {product.type === "Monitors" ? "🖥️" : "💻"}
              </div>
              <div style={{ minWidth: 0, flex: 1 }}>
                <h4
                  className="fw-semibold text-dark"
                  style={{ fontSize: "14px" }}
                >
                  {product.title}
                </h4>
                <p className="text-secondary" style={{ fontSize: "11px" }}>
                  SN: {product.serialNumber}
                </p>
              </div>
            </div>

            <div className="text-end ms-3" style={{ flexShrink: 0 }}>
              <span
                className={`badge ${product.isNew ? "bg-success" : "bg-secondary"} me-2`}
              >
                {product.isNew ? "Новий" : "Б/У"}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

import { memo } from "react";
import { formatDateString } from "../utils/orderUtils";
import type { ExtendedProduct } from "../types/product";

interface ProductRowProps {
  product: ExtendedProduct;
  onDeleteClick: (id: number, title: string) => void;
}

const ProductRow = memo(function ProductRow({
  product,
  onDeleteClick,
}: ProductRowProps) {
  const usdPrice = product.price.find((p) => p.symbol === "USD")?.value || 0;
  const uahPrice = product.price.find((p) => p.symbol === "UAH")?.value || 0;

  return (
    <div
      className="product-card bg-white rounded-3 shadow-sm p-3 d-flex align-items-center justify-content-between gap-2"
      style={{ minWidth: "900px" }}
    >
      <div style={{ flexShrink: 0 }}>
        <span
          className={`dot d-inline-block rounded-circle ${
            product.isNew === 1 ? "bg-success" : "bg-secondary"
          }`}
          style={{ width: "10px", height: "10px" }}
        ></span>
      </div>

      <div style={{ flexShrink: 0 }}>
        <img
          src={product.photo}
          alt={product.title}
          className="rounded border"
          style={{ width: "50px", height: "40px", objectFit: "cover" }}
        />
      </div>

      <div style={{ flexBasis: "25%" }}>
        <h4
          className="fw-semibold text-dark small"
          style={{
            fontSize: "15px",
            display: "-webkit-box",
            WebkitLineClamp: 3,
            WebkitBoxOrient: "vertical",
            overflow: "hidden",
            textOverflow: "ellipsis",
            maxHeight: "75px",
          }}
        >
          {product.title}
        </h4>
        <p className="text-muted custom-sm-text" style={{ fontSize: "11px" }}>
          {product.serialNumber}
        </p>
      </div>

      <div className="text-center">
        <span className={product.isNew === 1 ? "text-success" : "text-dark"}>
          {product.isNew === 1 ? "Новий" : "Б/У"}
        </span>
      </div>

      <div className="d-flex align-items-center gap-2">
        <div className="d-flex flex-column">
          <p className="text-muted small m-0">з</p>
          <p className="text-muted small m-0">по</p>
        </div>
        <div className="d-flex flex-column">
          <p className="text-dark small m-0">
            {formatDateString(product.guarantee.start).fullWithSlash}
          </p>
          <p className="text-dark small m-0">
            {formatDateString(product.guarantee.end).fullWithSlash}
          </p>
        </div>
      </div>

      <div className="text-start">
        <div className="text-muted small">{usdPrice} $</div>
        <div className="fw-semibold text-dark">{uahPrice} UAH</div>
      </div>

      <p
        className="text-dark text-decoration-underline m-0"
        style={{
          flexBasis: "20%",
          fontSize: "15px",
          display: "-webkit-box",
          WebkitLineClamp: 3,
          WebkitBoxOrient: "vertical",
          overflow: "hidden",
          textOverflow: "ellipsis",
          maxHeight: "75px",
        }}
      >
        {product.orderTitle}
      </p>

      <button
        type="button"
        className="btn btn-link text-muted p-2 delete-btn"
        aria-label={`Видалити продукт ${product.title}`}
        onClick={() => onDeleteClick(product.id, product.title)}
      >
        🗑️
      </button>
    </div>
  );
});

export default ProductRow;

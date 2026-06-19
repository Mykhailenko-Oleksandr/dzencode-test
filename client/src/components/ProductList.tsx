import { memo } from "react";
import ProductRow from "./ProductRow";
import type { ExtendedProduct } from "../types/product";

interface ProductListProps {
  products: ExtendedProduct[];
  onDeleteProduct: (id: number, title: string) => void;
}

const ProductList = memo(function ProductList({
  products,
  onDeleteProduct,
}: ProductListProps) {
  if (products.length === 0) {
    return (
      <div className="alert alert-info text-center m-4">
        Продуктів за вибраними фільтрами не знайдено.
      </div>
    );
  }

  return (
    <div className="d-flex flex-column gap-3">
      {products.map((product) => (
        <ProductRow
          key={product.id}
          product={product}
          onDeleteClick={onDeleteProduct}
        />
      ))}
    </div>
  );
});

export default ProductList;

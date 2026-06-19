import { useState, useCallback, useMemo } from "react";
import { useAppSelector } from "../store";
import PageTitle from "../components/PageTitle";
import ProductList from "../components/ProductList";
import type { ExtendedProduct } from "../types/product";

export default function Products() {
  const { orders } = useAppSelector((state) => state.app);

  const [selectedType, setSelectedType] = useState<string>("Всі");
  const [selectedSpec, setSelectedSpec] = useState<string>("Всі");

  const allProducts: ExtendedProduct[] = useMemo(() => {
    return orders.flatMap((order) =>
      order.products.map((product) => ({
        ...product,
        orderTitle: order.title,
      })),
    );
  }, [orders]);

  const productTypes = useMemo(
    () => ["Всі", ...new Set(allProducts.map((p) => p.type))],
    [allProducts],
  );
  const productSpecs = useMemo(
    () => ["Всі", ...new Set(allProducts.map((p) => p.specification))],
    [allProducts],
  );

  const filteredProducts = useMemo(() => {
    return allProducts.filter((product) => {
      const matchesType =
        selectedType === "Всі" || product.type === selectedType;
      const matchesSpec =
        selectedSpec === "Всі" || product.specification === selectedSpec;
      return matchesType && matchesSpec;
    });
  }, [allProducts, selectedType, selectedSpec]);

  const handleDeleteProduct = useCallback((id: number, title: string) => {
    if (confirm(`Видалити продукт "${title}"?`)) {
      console.log("Delete product id:", id);
    }
  }, []);

  return (
    <section className="p-4 container-fluid">
      <div className="d-flex align-items-center gap-4 mb-4">
        <PageTitle title="Продукти" count={filteredProducts.length} />

        <div className="d-flex align-items-center gap-4">
          <div className="d-flex align-items-center gap-2">
            <label
              htmlFor="typeFilter"
              className="text-secondary small text-nowrap"
            >
              Тип продукту:
            </label>
            <select
              id="typeFilter"
              className="form-select form-select-sm"
              style={{ width: "180px", cursor: "pointer" }}
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value)}
            >
              {productTypes.map((type) => (
                <option key={type} value={type}>
                  {type}
                </option>
              ))}
            </select>
          </div>

          <div className="d-flex align-items-center gap-2">
            <label
              htmlFor="specFilter"
              className="text-secondary small text-nowrap"
            >
              Специфікація:
            </label>
            <select
              id="specFilter"
              className="form-select form-select-sm"
              style={{ width: "180px", cursor: "pointer" }}
              value={selectedSpec}
              onChange={(e) => setSelectedSpec(e.target.value)}
            >
              {productSpecs.map((spec) => (
                <option key={spec} value={spec}>
                  {spec}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <ProductList
        products={filteredProducts}
        onDeleteProduct={handleDeleteProduct}
      />
    </section>
  );
}

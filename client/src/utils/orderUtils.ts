import type { Product } from "../types/product";

export const calculateTotal = (products: Product[]) => {
  return products.reduce(
    (acc, product) => {
      const usdPrice =
        product.price.find((p) => p.symbol === "USD")?.value || 0;
      const uahPrice =
        product.price.find((p) => p.symbol === "UAH")?.value || 0;
      return {
        usd: acc.usd + usdPrice,
        uah: acc.uah + uahPrice,
      };
    },
    { usd: 0, uah: 0 },
  );
};

export const formatDateString = (dateStr: string) => {
  const date = new Date(dateStr);
  const day = String(date.getDate()).padStart(2, "0");

  const monthNumeric = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  const months = [
    "Січ",
    "Лют",
    "Бер",
    "Квіт",
    "Трав",
    "Черв",
    "Лип",
    "Серп",
    "Верес",
    "Жовт",
    "Лист",
    "Груд",
  ];

  return {
    short: `${day} / ${months[date.getMonth()]}`,
    full: date.toLocaleDateString("uk-UA"),
    fullWithSlash: `${day} / ${monthNumeric} / ${year}`,
  };
};

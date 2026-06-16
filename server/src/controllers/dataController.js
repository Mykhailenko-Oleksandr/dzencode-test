import { orders, products } from "../data.js";

export const getOrders = (req, res) => {
  try {
    res.json(orders);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Помилка сервера при отриманні замовлень" });
  }
};

export const getProducts = (req, res) => {
  try {
    res.json(products);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Помилка сервера при отриманні продуктів" });
  }
};

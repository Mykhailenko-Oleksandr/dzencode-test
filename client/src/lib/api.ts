import axios from "axios";
import type { Order } from "../types/order";

axios.defaults.baseURL = import.meta.env.VITE_API_URL
  ? `${import.meta.env.VITE_API_URL}/api`
  : "http://localhost:3001/api";

export async function getOrders() {
  const { data } = await axios.get<Order[]>("/orders");
  return data;
}

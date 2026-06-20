import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Order } from "../types/order";
import type { Product } from "../types/product";

interface AppState {
  orders: Order[];
  products: Product[];
  activeSessions: number;
  loading: boolean;
  error: string | null;
}

const initialState: AppState = {
  orders: [],
  products: [],
  activeSessions: 0,
  loading: false,
  error: null,
};

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    setOrders: (state, action: PayloadAction<Order[]>) => {
      state.orders = action.payload;
    },
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload;
    },
    setActiveSessions: (state, action: PayloadAction<number>) => {
      state.activeSessions = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
    deleteOrder: (state, action: PayloadAction<number>) => {
      state.orders = state.orders.filter(
        (order) => order.id !== action.payload,
      );
    },
    deleteProduct: (state, action: PayloadAction<number>) => {
      const productIdToDelete = action.payload;

      state.orders = state.orders.map((order) => ({
        ...order,
        products: order.products.filter(
          (product) => product.id !== productIdToDelete,
        ),
      }));
    },
  },
});

export const {
  setOrders,
  setProducts,
  setActiveSessions,
  setLoading,
  setError,
  deleteOrder,
  deleteProduct,
} = appSlice.actions;

export default appSlice.reducer;

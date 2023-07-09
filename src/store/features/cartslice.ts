import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

interface prod_data {
  _id: string;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

export interface CartState {
  items: Array<prod_data>;
  totalAmount: number;
  totalQuantity: number;
}

const initialState: CartState = {
  items: [],
  totalQuantity: 0,
  totalAmount: 0,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart(
      state: CartState,
      action: PayloadAction<{ product:prod_data; quantity: number }>
    ) {
      const newItem = action.payload.product;
      const existingItem = state.items.find((item) => item._id === newItem._id);
      state.totalQuantity = state.totalQuantity + action.payload.quantity;
      state.totalAmount =
        state.totalAmount +
        action.payload.quantity * action.payload.product.price;
        if (!existingItem) {
          state.items.push({
            ...newItem,
            quantity: action.payload.quantity,
          });
        }

    },

    removeFromCart(state: CartState, action: PayloadAction<string>) {
      const productId = action.payload;
      const existingItem = state.items.find((item) => item._id === productId);

      state.totalQuantity--;

      state.totalAmount = state.totalAmount - existingItem?.price!;
    },
    clearCart(state) {
      state = initialState;
    },
  },
});

// Action creators are generated for each case reducer function
export const cartActions = cartSlice.actions;

export default cartSlice.reducer;

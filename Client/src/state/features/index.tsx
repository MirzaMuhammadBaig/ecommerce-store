import { createSlice, PayloadAction } from "@reduxjs/toolkit"
import { RootState } from "../store"

// Define a type for the slice state
type OBJ = {
  tital: string
}

interface InitialState {
  cartData: OBJ[]
}

// Define the initial state using that type
// const initialState: InitialState =

export const cartSlice = createSlice({
  name: "cart",
  initialState: {
    cartData: [],
  } as InitialState,
  reducers: {
    setCart: (state, { payload }: PayloadAction<OBJ>) => {
      state.cartData.push(payload)
    },
    addToCart: (state, { payload }: PayloadAction<OBJ>) => {
      state.cartData.push(payload)
    },
  },
})

export const { setCart, addToCart } = cartSlice.actions

export default cartSlice.reducer

export const getCartData = (state: RootState) => state.cart.cartData

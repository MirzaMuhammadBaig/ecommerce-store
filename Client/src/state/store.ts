import { configureStore } from "@reduxjs/toolkit"
import {
  persistReducer,
  persistStore,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist"
import storage from "redux-persist/lib/storage"
import cartSlice from "./features/index"
import { combineReducers } from "@reduxjs/toolkit"
import thunk from "redux-thunk"
// import ThunkMiddleware from "redux-thunk";
// import AsyncThunk from "redux-thunk";

const reducers = combineReducers({
  cart: cartSlice,
})

const persistConfig = { key: "cart_key", storage }
const persistedReducer = persistReducer(persistConfig, reducers)

export const store = configureStore({
  reducer: persistedReducer,
  middleware: [thunk],
})

export const persistor = persistStore(store)

export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

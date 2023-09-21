import { configureStore } from "@reduxjs/toolkit";
import reducers from './reducers'
export default configureStore({
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
  reducer: reducers,
});
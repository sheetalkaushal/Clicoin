import { configureStore } from "@reduxjs/toolkit";
import Statemange from "./reducers/Statemange";
export const store = configureStore({
  reducer: {
    status: Statemange,
  },
});

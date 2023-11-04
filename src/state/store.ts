import { MP, ViewType } from "../data/types";
import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

export type AppState = {
  loading: boolean;
  data: { profiles: MP[] };
  view: ViewType;
};

export const initState: AppState = {
  loading: true,
  data: { profiles: [] },
  view: "about",
};

const store = configureStore({ reducer: rootReducer });

export default store;

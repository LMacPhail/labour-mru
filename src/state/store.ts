import { values } from "../data/test/rawResponse";
import { Filters, MP, ViewType } from "../data/types";
import { formatResponse } from "../data/utils";
import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

export type AppState = {
  loading: boolean;
  data: { profiles: MP[] };
  view: ViewType;
  activeFilters: Filters;
};

export const initState: AppState = {
  loading: true,
  data: { profiles: formatResponse(values) },
  view: "about",
  activeFilters: {
    policies: {
      climate: {
        links: undefined,
        positive: undefined,
      },
      migration: {
        links: undefined,
        positive: undefined,
      },
      LGBTQ: {
        links: undefined,
        positive: undefined,
      },
      workers: {
        links: undefined,
        positive: undefined,
      },
      NHS: {
        links: undefined,
        positive: undefined,
      },
      benefits: {
        links: undefined,
        positive: undefined,
      },
      strikes: {
        links: undefined,
        positive: undefined,
      },
      publicOwnership: {
        links: undefined,
        positive: undefined,
      },
    },
  },
};

const store = configureStore({ reducer: rootReducer });

export default store;

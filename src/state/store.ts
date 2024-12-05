import { Filters, MP } from "../data/types";
import { mps } from "../data/test/rawResponse";
import rootReducer from "./reducer";
import { configureStore } from "@reduxjs/toolkit";

export type AppState = {
  data: { status: "loading" | "complete" | "error"; profiles: MP[] };
  activeFilters: Filters;
};

export const initState: AppState = {
  data: {
    status: "loading",
    profiles: mps.map((x) => {
      const { id, created_at, ...mp } = x;
      return mp;
    }) as MP[],
  },
  activeFilters: {
    searchInput: "",
    policies: {
      climate: {
        source: undefined,
        positive: null,
      },
      migration: {
        source: undefined,
        positive: null,
      },
      LGBTQ: {
        source: undefined,
        positive: null,
      },
      workers: {
        source: undefined,
        positive: null,
      },
      NHS: {
        source: undefined,
        positive: null,
      },
      benefits: {
        source: undefined,
        positive: null,
      },
      strikes: {
        source: undefined,
        positive: null,
      },
      publicOwnership: {
        source: undefined,
        positive: null,
      },
      housing: {
        source: undefined,
        positive: null,
      },
      palestine: {
        source: undefined,
        positive: null,
      },
    },
    sortDescending: true,
  },
};

const store = configureStore({ reducer: rootReducer });

export default store;

export const MODAL_DISMISSED_KEY = "modal-dismissed";

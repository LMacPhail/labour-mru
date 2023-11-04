import { MP, ViewType } from "../data/types";

export const SET_LOADING_ACTION = "set-loading";
export const SET_VIEW_ACTION = "set-view";
export const SET_PROFILES_ACTION = "set-profiles";

export type Action =
  | { type: typeof SET_LOADING_ACTION; payload: { loading: boolean } }
  | { type: typeof SET_VIEW_ACTION; payload: { view: ViewType } }
  | { type: typeof SET_PROFILES_ACTION; payload: { profiles: MP[] } };

import { DataStatus, MP, PolicyType, ViewType } from "../data/types";

export const SET_VIEW_ACTION = "set-view";
export const SET_DATA_ACTION = "set-data";
export const SET_POLICY_STANCE_ACTION = "set-policy-stance";
export const SET_SEARCH_INPUT_ACTION = "set-search-input";

export type Action =
  | { type: typeof SET_VIEW_ACTION; payload: { view: ViewType } }
  | {
      type: typeof SET_DATA_ACTION;
      payload: { profiles: MP[]; status: DataStatus };
    }
  | {
      type: typeof SET_POLICY_STANCE_ACTION;
      payload: { category: PolicyType; positive?: boolean };
    }
  | {
      type: typeof SET_SEARCH_INPUT_ACTION;
      payload: { value: string };
    };

import { DataStatus, MP, PolicyType } from "../data/types";

export const SET_DATA_ACTION = "set-data";
export const SET_POLICY_STANCE_ACTION = "set-policy-stance";
export const SET_SEARCH_INPUT_ACTION = "set-search-input";
export const SET_SORTBY_ACTION = "set-sort-by-input";

export type Action =
  | {
      type: typeof SET_DATA_ACTION;
      payload: { profiles: MP[]; status: DataStatus };
    }
  | {
      type: typeof SET_POLICY_STANCE_ACTION;
      payload: { category: PolicyType; positive?: boolean };
    }
  | {
      type: typeof SET_SORTBY_ACTION;
      payload: { descending: boolean };
    }
  | {
      type: typeof SET_SEARCH_INPUT_ACTION;
      payload: { value: string };
    };

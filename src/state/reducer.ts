import { captureAnalyticsEvent } from "../analytics";
import {
  Action,
  SET_POLICY_STANCE_ACTION,
  SET_DATA_ACTION,
  SET_SEARCH_INPUT_ACTION,
  SET_SORTBY_ACTION,
} from "./actions";
import { AppState, initState } from "./store";

// Use the initialState as a default value
export default function appReducer(
  state = initState,
  action: Action
): AppState {
  switch (action.type) {
    case SET_DATA_ACTION: {
      const { data } = state;
      const { profiles, status } = action.payload;
      return {
        ...state,
        data: {
          ...data,
          profiles: profiles,
          status,
        },
      };
    }
    case SET_POLICY_STANCE_ACTION: {
      const { category, positive } = action.payload;
      const { policies } = state.activeFilters;
      captureAnalyticsEvent("filter changed", { category, positive });
      const policyStances = { ...policies, [category]: { positive } };
      const activeFilters = Object.entries(policyStances)
        .filter(([key, p]) => p.positive)
        .map(([policy, _]) => policy);
      captureAnalyticsEvent("set active filters", activeFilters);
      return {
        ...state,
        activeFilters: {
          ...state.activeFilters,
          policies: policyStances,
        },
      };
    }
    case SET_SEARCH_INPUT_ACTION: {
      const { value } = action.payload;
      return {
        ...state,
        activeFilters: {
          ...state.activeFilters,
          searchInput: value,
        },
      };
    }
    case SET_SORTBY_ACTION: {
      const { descending } = action.payload;
      captureAnalyticsEvent("sort list", { descending });
      return {
        ...state,
        activeFilters: {
          ...state.activeFilters,
          sortDescending: descending,
        },
      };
    }
    default: {
      return state;
    }
  }
}

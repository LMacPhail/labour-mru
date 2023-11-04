import {
  Action,
  SET_LOADING_ACTION,
  SET_PROFILES_ACTION,
  SET_VIEW_ACTION,
} from "./actions";
import { AppState, initState } from "./store";

// Use the initialState as a default value
export default function appReducer(
  state = initState,
  action: Action
): AppState {
  switch (action.type) {
    case SET_LOADING_ACTION: {
      return {
        ...state,
        loading: action.payload.loading,
      };
    }
    case SET_PROFILES_ACTION: {
      const { data } = state;
      const { profiles } = action.payload;
      return {
        ...state,
        loading: profiles !== undefined && profiles.length > 0,
        data: {
          ...data,
          profiles: action.payload.profiles,
        },
      };
    }
    case SET_VIEW_ACTION: {
      return {
        ...state,
        view: action.payload.view,
      };
    }
    default: {
      return state;
    }
  }
}

import React from "react";
import { useDispatch } from "react-redux";
import { SET_SEARCH_INPUT_ACTION } from "../state/actions";

export const SearchInput: React.FC = () => {
  const dispatch = useDispatch();
  const handleSearchChange = (value: string) => {
    dispatch({ type: SET_SEARCH_INPUT_ACTION, payload: { value } });
  };
  return (
    <input
      type="text"
      id="icon"
      name="icon"
      className="input"
      placeholder="Search by name or constituency"
      onChange={(e) => handleSearchChange(e.currentTarget.value)}
    />
  );
};

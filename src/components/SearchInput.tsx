import React from "react";
import { useDispatch } from "react-redux";
import { SET_SEARCH_INPUT_ACTION } from "../state/actions";

export const SearchInput: React.FC = () => {
  const dispatch = useDispatch();
  const handleSearchChange = (value: string) => {
    dispatch({ type: SET_SEARCH_INPUT_ACTION, payload: { value } });
  };
  return (
    <>
      <input
        type="text"
        id="icon"
        name="icon"
        className="input"
        placeholder="Search by name or constituency"
        onChange={(e) => handleSearchChange(e.currentTarget.value)}
      />

      <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none z-20 pl-4">
        <svg
          className="h-4 w-4 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
        </svg>
      </div>
    </>
  );
};

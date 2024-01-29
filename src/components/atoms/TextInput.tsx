import React from "react";

export const TextInput: React.FC<{
  label: string;
  id: string;
  required?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  value: string;
  disabled?: boolean;
}> = ({ label, id, required = false, onChange, value, disabled = false }) => {
  return (
    <label className="form-control w-full max-w-xs">
      <div className="label">
        <span className="label-text">{label}</span>
      </div>
      <input
        className="input input-sm input-bordered bg-inherit w-full max-w-xs"
        id={id}
        type="text"
        required={required}
        disabled={disabled}
        value={value}
        onChange={onChange}
      />
    </label>
  );
};

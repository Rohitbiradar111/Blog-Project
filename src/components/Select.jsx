import React, { useId } from "react";

function Select({ options, label, className = "", ...props }, ref) {
  const id = useId();

  return (
    <div className="w-full">
      {label && (
        <label
          htmlFor={id}
          className="inline-block mb-1 pl-1 text-xl font-bold"
        >
          {label}
        </label>
      )}
      <select
        className={`px-3 py-2 rounded-lg bg-white text-black outline-none duration-200 w-full ${className}`}
        {...props}
        ref={ref}
        id={id}
      >
        {options?.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  );
}

export default React.forwardRef(Select);

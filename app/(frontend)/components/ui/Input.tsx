import { cn } from "@/lib/cn";
import React from "react";

export interface InputProps {
  name: string;
  placeholder?: string;
  type?: string;
  error?: string;
  required?: boolean;
}

function Input({
  name,
  placeholder,
  type = "text",
  error,
  required,
}: InputProps) {
  const className = cn(
    "w-full p-4 rounded-lg bg-white focus:outline-none tracking-wide resize-none border border-gray-300 transition-colors",
    {
      "col-span-full": type === "textarea",
      "border-red-500": error,
      "focus:border-hover": !error,
    }
  );

  return (
    <div className="relative">
      {type === "textarea" ? (
        <textarea
          name={name}
          className={className}
          placeholder={placeholder}
          rows={5}
          required={required}
        />
      ) : (
        <input
          type={type}
          name={name}
          className={className}
          placeholder={placeholder}
          required={required}
        />
      )}
      {required && (
        <span className="absolute top-2 right-3 text-red-500 text-4xl select-none pointer-events-none">
          *
        </span>
      )}
    </div>
  );
}

export default Input;

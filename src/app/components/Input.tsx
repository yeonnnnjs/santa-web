"use client";

import { useState } from "react";
import Button from "@/app/components/Button";

const Input = () => {
  const [inputValue, setInputValue] = useState("");

  const handleValue = () => {};

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  return (
    <div className="mb-6 flex">
      <input
        type="text"
        value={inputValue}
        onChange={handleChange}
        placeholder={""}
        className="w-full rounded-l-md border px-4 py-2"
      />
      <Button
        onClick={handleValue}
        disableCondition={inputValue.length === 0}
        mode={"input"}
      >
        추가
      </Button>
    </div>
  );
};

export default Input;

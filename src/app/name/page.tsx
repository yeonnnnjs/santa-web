"use client";

import { useRef, useState, useEffect } from "react";
import { useRouter } from "next/navigation";

const Name = () => {
  const router = useRouter();
  const [nickName, setNickName] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClick = () => {
    if (!nickName.trim()) {
      alert("별명을 입력해주세요");
      return;
    }
    localStorage.setItem("nickName", nickName);
    router.push("/chat");
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      handleClick();
    }
  };

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  return (
    <div className={"relative m-auto w-full max-w-[1100px]"}>
      <div
        className={
          "absolute -top-[100px] left-1/2 flex w-full -translate-x-1/2 transform flex-col items-center justify-center gap-[18px] text-xl text-[#363636] md:-top-[120px] md:text-3xl"
        }
      >
        <h1 className={"font-bold"}>산타와 대화하자</h1>
        <span className={"font-normal"}>
          산타와 대화할 별명을 입력해주세요.
        </span>
      </div>
      <div className="flex w-full flex-col gap-4 md:flex-row">
        <input
          className={
            "w-full rounded-[20px] border-[6px] border-[#363636] p-3 text-xl shadow-stone-50 focus:outline-none md:rounded-[32px] md:border-[15px] md:p-6 md:text-3xl"
          }
          onKeyDown={handleKeyDown}
          placeholder={"여기에 적어주세요."}
          onChange={(e) => setNickName(e.target.value)}
        />
        <button
          className="whitespace-nowrap rounded-[20px] bg-[#363636] p-3 text-xl font-bold text-white md:rounded-[32px] md:px-[50px] md:py-7 md:text-3xl"
          onClick={handleClick}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default Name;

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
          "absolute -top-[120px] left-1/2 flex w-full -translate-x-1/2 transform flex-col items-center justify-center gap-[18px] text-3xl text-[#363636]"
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
            "w-full rounded-[32px] border-[15px] border-[#363636] p-6 text-3xl shadow-stone-50 focus:outline-none"
          }
          onKeyDown={handleKeyDown}
          placeholder={"여기에 적어주세요."}
          onChange={(e) => setNickName(e.target.value)}
        />
        <button
          className="whitespace-nowrap rounded-[32px] bg-[#363636] px-[50px] py-7 text-3xl font-bold text-white"
          onClick={handleClick}
        >
          확인
        </button>
      </div>
    </div>
  );
};

export default Name;

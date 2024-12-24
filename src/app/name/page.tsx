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
    <div className={"flex w-full flex-col items-center justify-center p-8"}>
      <div
        className={"relative mx-auto my-auto flex w-full max-w-[1100px] gap-4"}
      >
        <div
          className={
            "absolute -top-[120px] left-1/2 flex w-full -translate-x-1/2 transform flex-col items-center justify-center gap-[18px] text-2xl text-[#363636]"
          }
        >
          <h1 className={"font-bold"}>산타와 대화하자</h1>
          <span className={"font-normal"}>
            산타와 대화할 별명을 입력해주세요.
          </span>
        </div>
        <input
          className={
            "h-full w-full rounded-[40px] border-[15px] border-[#363636] p-8 text-2xl shadow-stone-50 focus:outline-none"
          }
          onKeyDown={handleKeyDown}
          placeholder={"여기에 적어주세요."}
          onChange={(e) => setNickName(e.target.value)}
        />
        <button
          className="h-full whitespace-nowrap rounded-[40px] bg-[#363636] px-[50px] py-7 text-2xl font-bold text-white"
          onClick={handleClick}
        >
          확인
        </button>
      </div>
    </div>
  );
};
export default Name;

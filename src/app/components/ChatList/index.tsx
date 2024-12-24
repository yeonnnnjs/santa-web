"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";

import homeIcon from "../../../../public/home.png";

export const ChatList = () => {
  const router = useRouter();

  return (
    <aside className={"h-real-screen relative z-30 my-3 w-full md:w-[196px]"}>
      <div
        className={
          "flex h-full flex-col items-center rounded-[30px] bg-[#FFC9C9] px-3 md:border-r md:pb-20"
        }
      >
        <div className="flex flex-col items-center justify-between">
          <Image
            className="rounded-full border-2 border-[#8B8B8B] bg-white"
            width={65}
            height={65}
            src={"/santa-claus.png"}
            alt={"list"}
          />
          <div className={"text-black"}>Santa1</div>
        </div>
        <div
          className={
            "absolute bottom-0 flex flex-col items-center justify-between pb-8 hover:cursor-pointer"
          }
          onClick={() => router.push("/")}
        >
          <Image src={homeIcon} alt={"home-icon"} width={31} />
          <div className={"text-white"}>홈으로</div>
        </div>
      </div>
    </aside>
  );
};

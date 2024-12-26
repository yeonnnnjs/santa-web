"use client";

import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useMemo } from "react";

export const Top = () => {
  const router = useRouter();
  const pathname = usePathname();

  const nickName = useMemo(() => {
    if (typeof window !== "undefined" && pathname === "/chat") {
      return localStorage.getItem("nickName") || "";
    }
  }, [pathname]);

  const isOnlyLogo = pathname === "/";

  const isLeaderboard = pathname === "/leaderboard";

  return (
    <div
      className={
        "fixed left-0 top-0 z-10 flex h-[90.95px] w-full justify-between bg-[#FBFFC9] p-4 md:h-[128.95px] md:px-10 md:pb-4 md:pt-[50px]"
      }
    >
      {!isOnlyLogo && (
        <button
          onClick={() => router.back()}
          className={"flex items-center justify-center gap-5"}
        >
          <Image
            width={30}
            height={30}
            src={"/back-arrow.png"}
            alt={"back-btn"}
          />
          <div className={"hidden text-3xl font-bold md:flex"}>뒤로가기</div>
        </button>
      )}
      <Image
        src={isLeaderboard ? "/leaderboard.svg" : "/santa-tell.svg"}
        width={isOnlyLogo ? 562 : 272}
        height={isOnlyLogo ? 145 : 70}
        alt={"logo"}
        className={
          "absolute left-1/2 top-[14px] -translate-x-1/2 transform px-4 md:top-[50px]"
        }
      />
      {!isOnlyLogo && nickName && (
        <p className={"font-regular my-auto align-middle text-xl"}>
          {nickName}
        </p>
      )}
    </div>
  );
};

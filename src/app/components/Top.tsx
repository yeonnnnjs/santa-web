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
        "fixed left-0 top-0 z-10 flex h-[128.95px] w-full justify-between bg-[#FBFFC9] px-10 pb-4 pt-[50px]"
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
          <div className={"text-2xl font-bold"}>뒤로가기</div>
        </button>
      )}
      <Image
        src={isLeaderboard ? "/leaderboard.svg" : "/santa-tell.svg"}
        width={isOnlyLogo || isLeaderboard ? 562 : 272}
        height={isOnlyLogo || isLeaderboard ? 145 : 70}
        alt={"logo"}
        className={
          "absolute left-1/2 top-[50px] -translate-x-1/2 transform px-4"
        }
      />
      {!isOnlyLogo && nickName && (
        <p className={"font-regular my-auto align-middle text-2xl"}>
          {nickName}
        </p>
      )}
    </div>
  );
};

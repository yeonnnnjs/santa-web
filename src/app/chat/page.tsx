"use client";

import { useEffect, useMemo, useState } from "react";
import dynamic from "next/dynamic";
const ChatRoom = dynamic(() => import("@/app/components/ChatRoom"), {
  ssr: false,
});
const ChatBottom = dynamic(() => import("@/app/components/ChatBottom"), {
  ssr: false,
});

const Chat = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const nickName = useMemo(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("nickName") || "";
    }
    return null;
  }, []);

  return (
    <div className={"flex min-h-full w-full flex-col items-center gap-4"}>
      <ChatRoom
        isSubmitted={isSubmitted}
        setIsSubmitted={setIsSubmitted}
        nickName={nickName}
      />
      <ChatBottom setIsSubmitted={setIsSubmitted} nickName={nickName} />
    </div>
  );
};
export default Chat;

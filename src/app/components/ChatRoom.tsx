import { useEffect, useMemo, useState } from "react";

import type { Message } from "@/types/chat/type";
import ChatBottom from "@/app/components/ChatBottom";

type Props = {
  isSubmitted: boolean;
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  nickName: string | null;
};

export const ChatRoom = ({ isSubmitted, setIsSubmitted, nickName }: Props) => {
  const [talkBubble, setTalkBubble] = useState<Message[]>([]);

  const getChatList = async () => {
    try {
      const data = await fetch("https://basque.kro.kr/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nickName,
        }),
      });
      const result = await data.json();
      setTalkBubble(result);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    if (nickName && nickName.length > 0) {
      getChatList();
    }
    setIsSubmitted(false);
  }, [isSubmitted]);

  return (
    <div
      className={
        "bg-gradient-custom flex h-full w-full flex-col gap-4 overflow-y-auto rounded-[30px] border px-[44px] py-[54px] transition-transform duration-500"
      }
    >
      <div className="left flex w-fit flex-row justify-center rounded-[30px] bg-[#FCE1E1]">
        <p className={"px-[30px] py-[21px]"}>
          허허허 선물을 받고 싶다고?
          <br />
          어디 나를 설득해보거라~
        </p>
      </div>
      {talkBubble.map((msg: Message, id: number) =>
        msg.author === "USER" ? (
          <div className={"flex w-full flex-row-reverse"} key={id}>
            <div
              className={
                "mb-4 flex w-fit flex-row-reverse rounded-[30px] bg-[#E1FCE3] px-7 py-[21px]"
              }
            >
              내가 받고 싶은 선물은 {msg.gift}(이)야 왜냐하면 {msg.content}{" "}
              (이)니까!
            </div>
          </div>
        ) : (
          <div className={"w-full md:w-1/2"} key={id}>
            <div
              className={
                "w-fit rounded-[30px] bg-[#FCE1E1] px-[30px] py-[21px]"
              }
            >
              {msg.content}
            </div>
          </div>
        ),
      )}
    </div>
  );
};

export default ChatRoom;

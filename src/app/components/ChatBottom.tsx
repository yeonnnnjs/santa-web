import { useMemo, useState } from "react";
import Image from "next/image";

type Props = {
  setIsSubmitted: React.Dispatch<React.SetStateAction<boolean>>;
  nickName: string | null;
};

export const ChatBottom = ({ setIsSubmitted, nickName }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [prompt, setPrompt] = useState("");
  const [gift, setGift] = useState("");
  const [error, setError] = useState<string | null>(null);

  const onClickHandler = async () => {
    if (!gift || !prompt) {
      setError("선물과 이유를 모두 입력해주세요");
      return;
    }

    try {
      setIsLoading(true);
      setError(null);
      const data = await fetch("https://basque.kro.kr/api/chat/create", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ gift: gift, prompt: prompt, name: nickName }),
      });
      const result = await data.json();
      console.log(result);

      setIsSubmitted(true);
      setIsLoading(false);
      setGift("");
      setPrompt("");
    } catch (e) {
      console.error("Error sending data:", e);
    }
  };

  return (
    <div className="flex h-fit w-full justify-center gap-4 self-end">
      <div className="flex w-full flex-col gap-4">
        <div className={"flex w-full items-center gap-[19px]"}>
          <Image
            className={"rounded-full border border-black bg-white"}
            src={"/gift.svg"}
            alt={"gift"}
            width={66}
            height={66}
          />
          <input
            className={
              "w-full rounded-[55px] border border-[#363636] px-[38px] py-6"
            }
            value={gift}
            placeholder={"받고 싶은 선물을 적어주세요."}
            onChange={(e) => setGift(e.target.value)}
          />
        </div>
        <div className={"flex items-center gap-[19px]"}>
          <Image
            className={"rounded-full border border-black bg-white"}
            src={"/jingle-bell.png"}
            alt={"gift"}
            width={66}
            height={66}
          />
          <input
            className={
              "w-full rounded-[55px] border border-[#363636] px-[38px] py-6"
            }
            value={prompt}
            placeholder={"선물을 받고 싶은 이유를 적어주세요."}
            onChange={(e) => setPrompt(e.target.value)}
          />
        </div>
      </div>
      <button
        className={
          "border-1 whitespace-nowrap rounded-[30px] border-[#363636] bg-[#C9FFDE] p-6"
        }
        onClick={onClickHandler}
        disabled={isLoading}
      >
        {isLoading ? (
          "로딩 중"
        ) : (
          <p>
            산타에게
            <br />
            메세지 <br /> 보내기
          </p>
        )}
      </button>
      {error && <p className="absolute bottom-0 text-red-500">{error}</p>}{" "}
      {/* 에러 메시지 표시 */}
    </div>
  );
};

export default ChatBottom;

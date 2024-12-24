import { LeaderBoard } from "@/types/leaderboard/type";
import Image from "next/image";

const indexColors = ["#41FF8A", "#9AFFC1", "#DAFFE8", "#F2FFF7", "#FFFFFF"];
const giftColors = ["#FF8D8D", "#FFADAD", "#FDD4D4", "#FFEDED", "#FFFCFC"];

const Leaderboard = async () => {
  const response = await fetch("https://basque.kro.kr/api/leaderboard", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
  });
  console.log(response);
  const data: LeaderBoard[] = await response.json();

  return (
    <div className={"m-auto flex w-full max-w-[1200px] flex-col gap-6"}>
      {data.map((rank, i) => (
        <div
          className={
            "grid w-full max-w-[1200px] grid-cols-[1fr_3fr_3fr_2fr] gap-4"
          }
          key={i}
        >
          <div
            style={{
              backgroundColor: indexColors[i],
              fontWeight: "bold",
              color: "white",
              WebkitTextStroke: "2px black",
              textShadow: `
      0.5px 0.5px 0 black,
      -0.5px -0.5px 0 black,
      0.5px -0.5px 0 black,
      -0.5px 0.5px 0 black`,
            }}
            className={`flex h-[110px] w-[110px] items-center justify-center rounded-full border border-[#363636] text-center text-[64px]`}
          >
            {i + 1}
          </div>
          <div
            className={
              "flex items-center justify-center rounded-[55px] border border-[#363636] bg-white text-center text-2xl"
            }
          >
            {rank.name}
          </div>
          <div
            className={
              "relative flex items-center justify-center rounded-[55px] border border-[#363636] bg-white text-center text-2xl"
            }
          >
            <div
              style={{
                backgroundColor: giftColors[i],
              }}
              className={`absolute -left-[1px] -top-[1px] flex h-[110px] w-[110px] items-center justify-center rounded-full border border-[#363636] text-center`}
            >
              <Image src={"/gift.svg"} alt={"gift"} width={66} height={66} />
            </div>
            {rank.gift}
          </div>
          <div
            className={
              "relative flex items-center justify-center rounded-[55px] border bg-[#363636] text-center text-2xl text-white"
            }
          >
            {rank.timestamp.split("T")[0]}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Leaderboard;

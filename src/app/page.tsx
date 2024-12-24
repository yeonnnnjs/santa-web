"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <main className="flex w-full flex-col items-center justify-center bg-[#FBFFC9] p-6 align-middle">
      <div className="flex w-full max-w-[1100px] justify-between gap-4">
        <button
          className={"flex flex-col gap-8"}
          onClick={() => router.push("/name")}
        >
          <div className="flex items-center justify-center rounded-[40px] border border-[#363636] bg-[#FFC9C9]">
            <Image
              src={"/main/santa.png"}
              width={320}
              height={329}
              alt={"santa"}
            />
          </div>
          <div className={"mx-auto text-2xl"}>
            <p>Chat with Santa</p>
            <p className={"font-bold"}>산타와 대화하기</p>
          </div>
        </button>
        <button
          className={"flex flex-col gap-8"}
          onClick={() => router.push("/leaderboard")}
        >
          <div className="flex items-center justify-center rounded-[40px] border border-[#363636] bg-[#C9FFDE]">
            <Image
              src={"/main/christmasDate.png"}
              width={320}
              height={329}
              alt={"santa"}
            />
          </div>
          <div className={"mx-auto text-2xl"}>
            <p>Leaderboard</p>
            <p className={"font-bold"}>순위 경쟁하기</p>
          </div>
        </button>
      </div>
    </main>
  );
};

export default Home;

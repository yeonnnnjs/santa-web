"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Home = () => {
  const router = useRouter();
  return (
    <main className="flex w-full flex-col items-center justify-center bg-[#FBFFC9] p-6 align-middle">
      <div className="flex w-full max-w-[1100px] flex-col gap-4 md:flex-row md:justify-between">
        <button
          className="flex flex-col items-center gap-4"
          onClick={() => router.push("/name")}
        >
          <div className="flex items-center justify-center rounded-[40px] border border-[#363636] bg-[#FFC9C9] p-4 sm:p-6">
            <Image
              src={"/main/santa.png"}
              width={320}
              height={329}
              alt={"santa"}
              className="w-40 sm:w-56 md:w-64 lg:w-80" /* 반응형 크기 조정 */
            />
          </div>
          <div className="text-center text-lg sm:text-xl lg:text-3xl">
            <p>Chat with Santa</p>
            <p className="font-bold">산타와 대화하기</p>
          </div>
        </button>

        <button
          className="flex flex-col items-center gap-4"
          onClick={() => router.push("/leaderboard")}
        >
          <div className="flex items-center justify-center rounded-[40px] border border-[#363636] bg-[#C9FFDE] p-4 sm:p-6">
            <Image
              src={"/main/christmasDate.png"}
              width={320}
              height={329}
              alt={"leaderboard"}
              className="w-40 sm:w-56 md:w-64 lg:w-80" /* 반응형 크기 조정 */
            />
          </div>
          <div className="text-center text-lg sm:text-xl lg:text-3xl">
            <p>Leaderboard</p>
            <p className="font-bold">순위 경쟁하기</p>
          </div>
        </button>
      </div>
    </main>
  );
};

export default Home;

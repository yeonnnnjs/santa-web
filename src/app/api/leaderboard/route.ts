import { NextResponse } from "next/server";
import { LeaderBoard } from "@/types/leaderboard/type";
import { getDocuments } from "@/app/util/db";

const COLLECTION_NAME = "leaderboard";

export const POST = async () => {
  try {
    const data = await getDocuments(
      COLLECTION_NAME,
      undefined,
      {},
      { lengthOfPrompt: 1 },
    );

    // @ts-ignore
    const response = data ? data.map(({ _id, ...rest }) => rest) : [];

    return NextResponse.json(response as LeaderBoard[], {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
  }
};

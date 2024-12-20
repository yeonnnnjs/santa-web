import { NextRequest, NextResponse } from "next/server";
import { countDocuments, findOneDocument, insertDocument } from "@/app/util/db";
import { CreateLeaderBoard } from "@/types/leaderboard/type";
import { isValidate } from "@/app/util/validators";

const COLLECTION_NAME = "leaderboard";

export const POST = async (req: NextRequest) => {
  try {
    const request: CreateLeaderBoard = await req.json();
    const timestamp = new Date();
    if (!isValidate(request)) {
      return NextResponse.json(false, { status: 400 });
    }

    const rank = (await countDocuments(COLLECTION_NAME)) + 1;
    const isExist = await findOneDocument(COLLECTION_NAME, {
      name: request.name,
      gift: request.gift,
      lengthOfPrompt: request.lengthOfPrompt,
    });
    if (isExist) {
      return NextResponse.json(false, { status: 409 });
    }

    await insertDocument(COLLECTION_NAME, {
      rank,
      timestamp,
      name: request.name,
      gift: request.gift,
      lengthOfPrompt: request.lengthOfPrompt,
    });
    return NextResponse.json(true, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to insert data" },
      { status: 500 },
    );
  }
};

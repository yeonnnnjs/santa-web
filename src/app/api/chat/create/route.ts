import { NextRequest, NextResponse } from "next/server";
import { CreateMessage, Message } from "@/types/chat/type";
import { isValidate } from "@/app/util/validators";
import { addItemToList, setKeyValue } from "@/app/util/redis";
import { countDocuments, findOneDocument, insertDocument } from "@/app/util/db";

const COLLECTION_NAME = "leaderboard";

export const POST = async (req: NextRequest) => {
  try {
    const request: CreateMessage = await req.json();
    if (!isValidate(request)) {
      return NextResponse.json(false, { status: 400 });
    }
    const timestamp = new Date();

    const santaUrl = process.env.AI_URL;
    if (!santaUrl) {
      throw new Error("env variable is not set");
    }

    const santa = await fetch(santaUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(request),
    });
    const { isSuccess, response, lengthOfPrompt } = await santa.json();

    const message: Message = {
      isSuccess,
      author: "USER",
      content: request.prompt,
      timestamp: timestamp,
    };

    const santaMessage: Message = {
      isSuccess,
      author: "SANTA",
      content: response,
      timestamp: new Date(),
      lengthOfPrompt,
    };

    await addItemToList(request.name, JSON.stringify(message));
    await addItemToList(request.name, JSON.stringify(santaMessage));

    if (isSuccess) {
      const rank = (await countDocuments(COLLECTION_NAME)) + 1;
      const isExist = await findOneDocument(COLLECTION_NAME, {
        name: request.name,
        gift: request.gift,
        lengthOfPrompt: lengthOfPrompt,
      });
      if (isExist) {
        return NextResponse.json(false, { status: 409 });
      }

      await insertDocument(COLLECTION_NAME, {
        rank,
        timestamp,
        name: request.name,
        gift: request.gift,
        lengthOfPrompt: lengthOfPrompt,
      });
    }
    return NextResponse.json(santaMessage, { status: 200 });
  } catch (error) {
    console.log(error);
    return NextResponse.json(
      { error: "Failed to insert data" },
      { status: 500 },
    );
  }
};

import { NextRequest, NextResponse } from "next/server";
import { Message } from "@/types/chat/type";
import { getListItems } from "@/app/util/redis";

export const POST = async (req: NextRequest) => {
  try {
    const { name } = await req.json();
    const response = await getListItems(name);
    const messages: Message[] = response.map((chat) => JSON.parse(chat));
    return NextResponse.json(messages as Message[], {
      status: 200,
    });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ error: "Failed to read data" }, { status: 500 });
  }
};

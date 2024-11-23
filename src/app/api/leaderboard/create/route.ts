import { NextRequest, NextResponse } from "next/server";
import clientPromise from "@/app/lib/db";
import {CreateLeaderBoard} from "@/types/createLeaderBoard";

export const POST = async (req: NextRequest) => {
      try {
        const { name, isSuccess, lengthOfPrompt, gift }: CreateLeaderBoard = await req.json();
        const timestamp = new Date();
        if ( name == null || name.length <= 0 || gift == null || gift.length <= 0 || !isSuccess) {
          return NextResponse.json(false, { status: 400 });
        }

        const client = await clientPromise;
        const db = client.db("santa-web");
        const collection = db.collection("leaderboard");
        const rank = (await collection.countDocuments()) + 1;
        const isExist = await collection.findOne({ name, gift, lengthOfPrompt });
        if(isExist) {
          return NextResponse.json(false, { status: 409 });
        }

        await collection.insertOne({ rank, name, timestamp, lengthOfPrompt, gift });
        return NextResponse.json(true, { status: 200 });
      } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Failed to insert data" },
            { status: 500 },
        );
      }
};

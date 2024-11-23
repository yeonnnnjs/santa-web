import { NextResponse } from "next/server";
import clientPromise from "@/app/lib/db";

export const POST = async () => {
      try {
        const client = await clientPromise;
        const db = client.db("santa-web");
        const collection = db.collection("leaderboard");

        const data = await collection.find({}).toArray();
        const response = data.map(({ _id, ...rest }) => rest);
        return NextResponse.json(response, { status: 200 });
      } catch (error) {
        console.log(error);
        return NextResponse.json(
            { error: "Failed to read data" },
            { status: 500 },
        );
      }
};

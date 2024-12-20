import { createClient } from "redis";

const uri = process.env.REDIS_URL as string;

if (!uri) {
  throw new Error("Please add your Redis URI to .env");
}

let client;
let clientPromise: ReturnType<typeof createClient>;

client = createClient({ url: uri });
client.connect();
clientPromise = client;

export default clientPromise;

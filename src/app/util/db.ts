import clientPromise from "@/app/lib/db";

export const getCollection = async (collectionName: string) => {
  const client = await clientPromise;
  const db = client.db("santa-web");
  return db.collection(collectionName);
};

export const insertDocument = async (
  collectionName: string,
  document: Record<string, unknown>,
) => {
  const collection = await getCollection(collectionName);
  const result = await collection.insertOne(document);
  return result.insertedId;
};

export const findOneDocument = async (
  collectionName: string,
  query: Record<string, unknown>,
) => {
  const collection = await getCollection(collectionName);
  return collection.findOne(query);
};

export const countDocuments = async (
  collectionName: string,
  query: Record<string, any> = {},
) => {
  const collection = await getCollection(collectionName);
  return collection.countDocuments(query);
};

export const getDocuments = async (
  collectionName: string,
  id?: string,
  query: Record<string, unknown> = {},
  sort?: Record<string, 1 | -1>,
) => {
  const collection = await getCollection(collectionName);

  if (id) {
    // @ts-ignore
    return await collection.findOne({ _id: id, ...query });
  } else {
    return await collection
      .find(query)
      .sort(sort || {})
      .toArray();
  }
};

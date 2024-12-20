import clientPromise from "@/app/lib/redis";

export const setKeyValue = async (
  key: string,
  value: string,
  expirationInSeconds?: number,
): Promise<void> => {
  const client = clientPromise;
  try {
    if (expirationInSeconds) {
      await client.set(key, value, { EX: expirationInSeconds });
    } else {
      await client.set(key, value);
    }
  } catch (error) {
    console.error(`Error setting value in Redis: ${error}`);
    throw error;
  }
};

export const deleteKey = async (key: string): Promise<void> => {
  const client = clientPromise;
  try {
    const result = await client.del(key);
    if (result === 0) {
      console.warn(`Key "${key}" does not exist.`);
    }
  } catch (error) {
    console.error(`Error deleting key in Redis: ${error}`);
    throw error;
  }
};

export const getKeyValue = async (key: string): Promise<string | null> => {
  const client = clientPromise;
  try {
    return await client.get(key);
  } catch (error) {
    console.error(`Error getting value from Redis: ${error}`);
    throw error;
  }
};

export const addItemToList = async (
  key: string,
  value: string,
): Promise<void> => {
  const client = clientPromise;
  try {
    await client.rPush(key, value);
  } catch (error) {
    console.error(`Error adding item to Redis list: ${error}`);
    throw error;
  }
};

export const getListItems = async (key: string): Promise<string[]> => {
  const client = clientPromise;
  try {
    return await client.lRange(key, 0, -1);
  } catch (error) {
    console.error(`Error getting items from Redis list: ${error}`);
    throw error;
  }
};

export const removeItemFromList = async (
  key: string,
  value: string,
): Promise<void> => {
  const client = clientPromise;
  try {
    await client.lRem(key, 1, value);
  } catch (error) {
    console.error(`Error removing item from Redis list: ${error}`);
    throw error;
  }
};

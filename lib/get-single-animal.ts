import { AnimalFullInfo } from "@/types/types";

export async function getSingleAnimal(
  id: string,
  isDogAPI: boolean
): Promise<AnimalFullInfo> {
  let data;
  if (!isDogAPI) {
    data = await fetch(`${process.env.API_URL_CATS}/breeds/${id}`, {
      headers: { "x-api-key": String(process.env.API_KEY_CATS) },
    });
  }
  if (isDogAPI) {
    data = await fetch(`${process.env.API_URL_DOGS}/breeds/${id}`, {
      headers: { "x-api-key": String(process.env.API_KEY_DOGS) },
    });
  }

  if (!data) {
    throw new Error("Failed to fetch data");
  }

  if (!data.ok) {
    throw new Error("Failed to fetch data");
  }

  return data.json();
}

import { AnimalBaseInfo } from "@/types/types";

export async function getBreedImages(
  id: string,
  isDogAPI: boolean
): Promise<AnimalBaseInfo[]> {
  const images: AnimalBaseInfo[] = [];
  let page = 1;
  let totalPages = 1;

  while (page <= totalPages) {
    let data;

    if (!isDogAPI) {
      data = await fetch(
        `${process.env.API_URL_CATS}/images/search?breed_ids=${id}&page=${page}&limit=100&size=med`,
        {
          headers: { "x-api-key": String(process.env.API_KEY_CATS) },
        }
      );
    } else {
      data = await fetch(
        `${process.env.API_URL_DOGS}/images/search?breed_ids=${id}&page=${page}&limit=100&size=med`,
        {
          headers: { "x-api-key": String(process.env.API_KEY_DOGS) },
        }
      );
    }

    if (!data.ok) {
      throw new Error("Failed to fetch data");
    }

    const jsonData: AnimalBaseInfo[] = await data.json();

    if (jsonData.length === 0) {
      break;
    }

    images.push(...jsonData);

    page++;
  }

  return images;
}

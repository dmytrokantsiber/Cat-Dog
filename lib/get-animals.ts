import { AnimalFullInfo } from "@/types/types";

export async function getAnimals(
  queryString: string
): Promise<AnimalFullInfo[]> {
  const catsData = await fetch(
    `${process.env.API_URL_CATS}/breeds/${
      queryString ? `search?q=${queryString}&attach_image=1` : `?limit=10`
    }`,
    {
      headers: { "x-api-key": String(process.env.API_KEY_CATS) },
      cache: "no-cache",
    }
  );

  if (!catsData.ok) {
    throw new Error("Failed to fetch data");
  }

  const dogsData = await fetch(
    `${process.env.API_URL_DOGS}/breeds/${
      queryString ? `search?q=${queryString}&attach_image=1` : `?limit=10`
    }`,
    {
      headers: { "x-api-key": String(process.env.API_KEY_DOGS) },
      cache: "no-cache",
    }
  );

  if (!catsData.ok) {
    throw new Error("Failed to fetch data");
  }

  // shuffling result
  const result = [...(await dogsData.json()), ...(await catsData.json())].sort(
    () => Math.random() - 0.5
  );

  return result;
}

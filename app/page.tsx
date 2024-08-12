import { Card } from "@/components/shared/card";
import { Search } from "@/components/shared/search";
import { getAnimals } from "@/lib/get-animals";

interface SearchParamsProps {
  searchParams?: {
    page?: string;
    query?: string;
  };
}

export default async function Home({
  searchParams,
}: Readonly<SearchParamsProps>) {
  const query = searchParams?.query ?? "";
  const data = await getAnimals(query);

  return (
    <>
      <Search />
      <span className="block pt-4">Query: {query}</span>
      <div className="grid gap-[30px] grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] justify-between mb-12 mt-12">
        {data.length > 0 ? (
          data.map((animal) => {
            return (
              <div key={animal.id} className="h-full">
                <Card animal={animal} />
              </div>
            );
          })
        ) : (
          <p className="text-4xl">Nothing found!</p>
        )}
      </div>
    </>
  );
}

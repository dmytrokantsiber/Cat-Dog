import Image from "next/image";
import { getBreedImages } from "@/lib/get-breed-images";

export default async function Gallery({
  id,
  isDog,
}: {
  id: string;
  isDog: boolean;
}) {
  const gallery = await getBreedImages(id, isDog);

  return (
    <div className="grid gap-[30px] grid-cols-[repeat(auto-fill,_minmax(250px,_1fr))] justify-between mb-8">
      {gallery.map((item) => (
        <img src={item.url} alt="animal" key={item.id} />
      ))}
    </div>
  );
}

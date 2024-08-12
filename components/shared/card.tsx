import { AnimalFullInfo } from "@/types/types";
import Link from "next/link";

export function Card({ animal }: { animal: AnimalFullInfo }) {
  return (
    <Link href={`/animal/${animal.id}`}>
      <div className="flex flex-col items-center justify-around text-center overflow-hidden h-full customShadow rounded-lg transform transition-transform duration-300 hover:scale-110">
        <img
          src={animal.image?.url}
          style={{
            objectFit: "contain",
          }}
          alt="animal image"
        />
        <p className="p-8">{animal.name}</p>
      </div>
    </Link>
  );
}

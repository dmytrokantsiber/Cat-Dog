import Gallery from "@/components/shared/gallery";
import Spinner from "@/components/ui/spinner";
import { checkId } from "@/lib/check-id";
import { getSingleAnimal } from "@/lib/get-single-animal";
import { Metadata } from "next";
import { Suspense } from "react";

type Props = { params: { id: string } };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const isDog = checkId(params.id);
  const animal = await getSingleAnimal(params.id, isDog);

  return {
    title: `Cat-Dog | ${animal.name}`,
  };
}

export default async function Animal({ params }: Props) {
  const isDog = checkId(params.id);
  const animal = await getSingleAnimal(params.id, isDog);

  return (
    <div className="mb-8">
      <p className="font-bold text-4xl pb-4">{animal.name}</p>
      {isDog ? (
        <div className="pb-8 *:text-lg">
          <p>
            <b>Weight: </b>
            {animal.weight.metric}
          </p>
          <p>
            <b>Height: </b>
            {animal.height?.metric}
          </p>
          <p>
            <b>Bred for: </b>
            {animal?.bred_for}
          </p>
          <p>
            <b>Lifespan: </b>
            {animal?.life_span} years
          </p>
          <p>
            <b>Breed group: </b>
            {animal?.breed_group}
          </p>
        </div>
      ) : (
        <div className="pb-8 *:text-lg">
          <p>
            <b>Temperament:</b> {animal?.temperament}
          </p>
          <p>
            <b>Origin: </b>
            {animal?.origin}
          </p>
          <p>
            <b>Description: </b>
            {animal?.description}
          </p>
          <p>
            <b>Lifespan: </b>
            {animal?.life_span}
          </p>
        </div>
      )}

      <Suspense fallback={<Spinner />}>
        <Gallery id={params.id} isDog={isDog} />
      </Suspense>
    </div>
  );
}

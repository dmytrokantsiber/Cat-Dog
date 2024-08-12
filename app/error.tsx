"use client";

import Link from "next/link";
import { useEffect } from "react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex flex-col">
      <h2>Something went wrong!</h2>

      <Link href={"/"} className="text-3xl">
        Back to main
      </Link>
    </div>
  );
}

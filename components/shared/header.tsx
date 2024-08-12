import Link from "next/link";

export default function Header() {
  return (
    <Link href={"/"}>
      <div className="flex justify-center items-center h-20 mb-8">
        <h1 className="text-3xl">Cat-Dog Next.js</h1>
      </div>
    </Link>
  );
}

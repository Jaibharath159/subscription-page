import Link from "next/link";

export default function Home() {
  return (
    <div className="text-center bg-gray-500">
      <Link href="/page1">
        <h1>Go to subscription Page</h1>
      </Link>
    </div>
  );
}

import Link from "next/link";

export default function Home() {
  return (
    <div className="w-screen h-screen bg-black flex items-center justify-center">
      <Link
        href="https://econovation.notion.site/1ed30b4e356c806db005fe64f07ecf00?pvs=73"
        target="_blank"
      >
        <p className="text-4xl text-white">명세서 보러가기 &rarr;</p>
      </Link>
    </div>
  );
}

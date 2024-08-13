
import Image from "next/image";
import Link from "next/link";
import { useEffect } from "react";


export default async function Home() {



 

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <h1>Go to <Link href="/dashboard/overview">Dashboard /dashboard/overview</Link></h1>


    </main>
  );
}

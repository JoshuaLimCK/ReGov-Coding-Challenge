import { auth } from "@/auth";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const session = await auth();
  const loggedIn = session?.user;
  const linkTo = loggedIn ? "/user" : "/auth/login";
  return (
    <main className="flex min-h-screen flex-col items-center p-24">
      <div className="text-[100px]">
        <h1>Welcome</h1>
      </div>
      <Button size="lg" variant="linkHover1">
        <Link className="text-xl" href={linkTo}>
          Get Started
        </Link>
      </Button>
    </main>
  );
}

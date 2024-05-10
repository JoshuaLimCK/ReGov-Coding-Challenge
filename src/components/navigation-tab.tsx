import Link from "next/link";
import { Button } from "@/components/ui/button";
import { auth, signOut } from "@/auth";

export const NavigationTab = async () => {
  const session = await auth();
  const loggedIn = session?.user;
  return (
    <>
      <section className="flex p-4">
        <div className="flex basis-1/5 items-center">
          <Link href="/">User Authentication</Link>
        </div>
        {loggedIn ? (
          <form
            className="flex basis-4/5 justify-end items-center"
            action={async () => {
              "use server";
              await signOut();
            }}
          >
            <Button className="mx-2" variant="gooeyLeft" type="submit">
              <Link href="/user">{session.user.name}</Link>
            </Button>
            <Button
              className="mx-2 bg-destructive hover:bg-red-600"
              type="submit"
            >
              Log Out
            </Button>
          </form>
        ) : (
          <div className="flex basis-4/5 justify-end items-center">
            <Button className="mx-2" variant="gooeyRight">
              <Link href="/auth/login">Login</Link>
            </Button>
            <Button className="mx-2" variant="gooeyLeft">
              <Link href="/auth/register">Register</Link>
            </Button>
          </div>
        )}
      </section>
    </>
  );
};

import { signal } from "@preact/signals";
import { AboutMeDialog } from "@/components/about-me-dialog";
import { auth } from "@/auth";
import { CardWrapper } from "@/components/card-wrapper";

export const userId = signal("");
export const about = signal("");
export const aboutSect = signal("");
const finalAbout = signal("");

const User = async () => {
  const session = await auth();

  const user = session?.user;

  userId.value = user?.id as string;
  about.value = user?.about as string;
  aboutSect.value = user?.about as string;

  return (
    <main className="p-8">
      <section className="text-center text-3xl">
        <h1>
          Welcome{" "}
          <span className="font-bold">{user ? user.name : "undefined"}</span>
        </h1>
        <p>{user ? user.email : "no email"}</p>
      </section>
      <div className="flex items-center py-4">
        <h2 className="mr-4">About Me</h2>
        <AboutMeDialog user={user} />
      </div>
      <div>{aboutSect.value}</div>
    </main>
  );
};

export default User;

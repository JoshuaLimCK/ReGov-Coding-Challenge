import { FcGoogle } from "react-icons/fc";
import { Button } from "./ui/button";
import { FaGithub } from "react-icons/fa";
import { signIn } from "next-auth/react";
import { DEFAULT_LOGIN_REDIRECT } from "@/routes";

const Social = () => {
  const onClick = (provider: "google" | "github") => {
    signIn(provider, { callbackUrl: DEFAULT_LOGIN_REDIRECT });
  };
  return (
    <>
      <div className="flex items-center w-full gap-x-2">
        <Button
          onClick={() => onClick("google")}
          size="lg"
          className="w-full"
          variant="outline"
        >
          <FcGoogle />
        </Button>
        <Button
          onClick={() => {
            onClick("github");
          }}
          size="lg"
          className="w-full"
          variant="outline"
        >
          <FaGithub />
        </Button>
      </div>
    </>
  );
};

export default Social;

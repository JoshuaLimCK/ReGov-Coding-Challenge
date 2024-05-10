import NextAuth, { DefaultSession } from "next-auth";

export type ExtendedUser = DefaultSession["user"] & {
  about?: string;
  draft?: string;
};

declare module "next-auth" {
  interface Session {
    user: ExtendedUser;
  }
}

import { auth } from "@/auth";
import { db } from "@/lib/db";

export const getUserByEmail = async (email: string) => {
  try {
    const user = db.user.findUnique({ where: { email } });
    return user;
  } catch {
    return null;
  }
};

export const getUserById = async (id: string) => {
  try {
    const user = db.user.findUnique({ where: { id } });
    return user;
  } catch {
    return null;
  }
};

export const getUserSession = async () => {
  try {
    const session = await auth();
    return session;
  } catch {
    return null;
  }
};

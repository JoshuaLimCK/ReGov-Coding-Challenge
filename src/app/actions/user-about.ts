"use server";

import { db } from "@/lib/db";
import { revalidatePath } from "next/cache";

export const saveDraft = async (userId: string, draft: string | undefined) => {
  const user = await db.user.findUnique({ where: { id: userId } });

  if (!user) return { error: "User not found" };

  if (draft) {
    await db.user.update({ where: { id: user?.id }, data: { draft: draft } });
    revalidatePath("/user");
    return { success: "Draft saved" };
  }
};

export const saveSubmit = async (userId: string, about: string | undefined) => {
  const user = await db.user.findUnique({ where: { id: userId } });

  if (!user) return { error: "User not found" };

  if (about) {
    const newData = await db.user.update({
      where: { id: user?.id },
      data: { about: about, draft: about },
    });

    revalidatePath("/user");

    return { success: "About Me updated", data: newData };
  }
};

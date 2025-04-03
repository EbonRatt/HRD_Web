"use server";

import { createWorkspaces } from "@/services/todo/todo.service";
import { revalidateTag } from "next/cache";

export const insertWorkSpaceAction = async (workspace) => {
  try {
    await createWorkspaces(workspace);
    revalidateTag("workspace");
    return { success: true, message: "WorkSpace added successfully" };
  } catch (error) {
    return { success: false, message: error.message };
  }
};

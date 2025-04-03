import { z } from "zod";

export const RegisterSchema = z.object({
  userName: z.string().min(1, { message: "UserName is required" }),
  userEmail: z.string().email("This is not a valid email"),
  userPassword: z.string().min(6, "Password must be at least 6 characters"),
});

export const LoginSchema = z.object({
  userEmail: z
    .string()
    .min(1, { message: "Email is required" })
    .email("This is not a valid email"),
  userPassword: z.string().min(6, "Password must be at least 6 characters"),
});

export const formCreateWorkspaceSchema = z.object({
  workSpaceName: z.string().min(1, "Character must be more than 1"),
});

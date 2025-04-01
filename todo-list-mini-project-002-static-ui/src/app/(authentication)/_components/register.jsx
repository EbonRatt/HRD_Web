"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RegisterSchema } from "@/lib/zod/userSchema";
import { RegisterService } from "@/services/auth/user.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { KeyRound, Mail, UserRound } from "lucide-react";
import Link from "next/link";
import React from "react";

import { useForm } from "react-hook-form";

export default function RegisterComponent() {
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(RegisterSchema),
  });

  function handleRegisterUser(userData) {
    RegisterService(userData);
    // reset();
  }

  return (
    <form className="space-y-6" onSubmit={handleSubmit(handleRegisterUser)}>
      {/* username */}
      <div>
        <Label
          htmlFor="username"
          className="text-light-steel-blue flex gap-2 items-start mb-2 text-base"
        >
          <UserRound size={20} /> Username
        </Label>

        <Input
          type="text"
          id="userName"
          placeholder="Please type your username"
          className={` bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90`}
          {...register("userName")}
        />
        <span className="text-red-500 text-sm mt-4">
          {errors?.userName?.message}
        </span>
      </div>

      {/* email */}
      <div>
        <Label
          htmlFor="email"
          className="text-light-steel-blue flex gap-2 items-start mb-2  text-base"
        >
          <Mail size={20} /> Email
        </Label>

        <Input
          type="text"
          id="userEmail"
          placeholder="Please type your email"
          className={`bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90`}
          {...register("userEmail")}
        />
        <span className="text-red-500 text-sm mt-4">
          {errors?.userEmail?.message}
        </span>
      </div>

      {/* password */}
      <div>
        <Label
          htmlFor="password"
          className="text-light-steel-blue flex gap-2 items-start mb-2 text-base"
        >
          <KeyRound size={20} /> Password
        </Label>

        <Input
          type="password"
          id="userPassword"
          placeholder="Please type your password"
          className={`bg-ghost-white py-2.5 px-4 rounded-lg w-full text-light-steel-blue/90`}
          {...register("userPassword")}
        />
        <span className="text-red-500 text-sm mt-4">
          {errors?.userPassword?.message}
        </span>
      </div>

      {/* sign in button */}
      <Button className="text-base cursor-pointer bg-persian-green text-white py-2.5 rounded-lg w-full font-bold">
        Sign Up
      </Button>

      {/* underline */}
      <div>
        <div className="border-b border-b-light-steel-blue"></div>
        <div className="text-right mt-2 font-normal">
          Already have an account?
          <Link
            href={"/login"}
            className="hover:text-persian-green hover:underline"
          >
            Login
          </Link>
        </div>
      </div>

      {/* sign in with google */}
      <div className=" bg-ghost-white rounded-lg text-center">
        <Button className="flex gap-2 items-start justify-center w-full bg-ghost-white text-charcoal shadow-none hover:bg-ghost-white/50">
          <img src="/Google Icon.svg" alt="google icon" /> Sign in with google
        </Button>
      </div>
    </form>
  );
}

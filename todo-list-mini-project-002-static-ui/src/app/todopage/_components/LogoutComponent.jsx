"use client";

import { LogOut } from "lucide-react";
import { signOut } from "next-auth/react";
import React from "react";

const LogoutComponent = () => {
  return (
    <article className="px-10 mt-10 flex gap-2 text-green-500">
      <LogOut />
      <button
        className="font-semibold hover:cursor-pointer"
        onClick={() => signOut({ callbackUrl: "/" })}
      >
        Log Out
      </button>
    </article>
  );
};

export default LogoutComponent;

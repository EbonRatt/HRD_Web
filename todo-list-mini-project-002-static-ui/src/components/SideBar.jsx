import React from "react";
import Logo from "./logo";
import { SquarePlus } from "lucide-react";

const SideBar = () => {
  return (
    <aside className="flex flex-col w-[25%] min-h-full bg-blue-400">
      {/* Logo Profile */}
      <article className="bg-amber-200 h-[30%] flex justify-center items-center">
        <Logo />
      </article>
      {/* Workspace */}
      <article>
        <div className="flex font-bold text-gray-500 ">
          <p>Workspace</p>
          <SquarePlus />
        </div>
      </article>
    </aside>
  );
};

export default SideBar;

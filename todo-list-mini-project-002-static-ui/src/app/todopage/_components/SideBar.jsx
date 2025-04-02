import React from "react";
import Logo from "../../../components/logo";
import { SquarePlus, Star } from "lucide-react";
import WorkSpaceComponent from "./WorkSpaceComponent";
import { getAllWorkspaces } from "@/services/todo/todo.service";

const SideBar = async () => {
  const workspaceData = await getAllWorkspaces();

  function randomColor() {
    const colors = ["blue", "green", "purple", "orange", "lightblue", "red"];
    let randomColor = colors[Math.floor(Math.random() * colors.length)];
    return randomColor;
  }
  const workSpaceDataWithColor = workspaceData.payload.map(
    (workspaceColor) => ({
      ...workspaceColor,
      color: randomColor(),
    })
  );

  return (
    <aside className="flex flex-col w-[30%] min-h-full gap-5">
      {/* Logo Profile */}
      <article className=" h-[25%] flex justify-center items-center">
        <Logo />
      </article>
      {/* Workspace */}
      <article className="flex flex-col gap-5">
        <div className="flex font-bold text-gray-500 justify-between px-10 items-center">
          <p className="text-2xl">Workspace</p>
          <SquarePlus />
        </div>
        <ul className=" overflow-y-scroll max-h-[250px]">
          {workSpaceDataWithColor.map((workspace) => (
            <li key={workspace.workspaceId} className="rounded-sm">
              <WorkSpaceComponent data={workspace} />
            </li>
          ))}
        </ul>
      </article>
      {/* Favorite */}
      <article className="flex flex-col gap-5">
        <div className="flex font-bold text-gray-500 justify-between px-10 items-center">
          <p className="text-2xl">Favorite</p>
          <Star />
        </div>
        <ul className=" overflow-y-scroll max-h-[250px]">
          {workSpaceDataWithColor
            .filter((workspace) => workspace.isFavorite == true)
            .map((workspaceFavorite) => (
              <li key={workspaceFavorite.workspaceId} className="rounded-sm">
                <WorkSpaceComponent data={workspaceFavorite} />
              </li>
            ))}
        </ul>
      </article>
    </aside>
  );
};

export default SideBar;

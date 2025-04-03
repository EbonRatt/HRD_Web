import React from "react";
import Logo from "../../../components/logo";
import { LogOut } from "lucide-react";
import { getAllWorkspaces } from "@/services/todo/todo.service";
import WorkspacesComponentList from "./WorkspacesComponentList";
import FavoriteWorkspacesComponentList from "./FavoriteWorkspacesComponentList";

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
    <aside className="flex flex-col w-[30%] min-h-full">
      {/* Logo Profile */}
      <article className=" h-[25%] flex justify-center items-center">
        <Logo />
      </article>
      {/* Workspace */}
      <WorkspacesComponentList workspace={workSpaceDataWithColor} />
      {/* Favorite */}
      <FavoriteWorkspacesComponentList workspace={workSpaceDataWithColor} />

      {/* LoginOut */}
      <article className="px-10 mt-10 flex gap-2 text-green-500">
        <LogOut />
        <span className="font-semibold">Logout</span>
      </article>
    </aside>
  );
};

export default SideBar;

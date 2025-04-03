import React from "react";
import Logo from "../../../components/logo";
import WorkspacesComponentList from "./WorkspacesComponentList";
import FavoriteWorkspacesComponentList from "./FavoriteWorkspacesComponentList";
import LogoutComponent from "./LogoutComponent";

const SideBar = async ({ workspaceData }) => {
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
      <LogoutComponent />
    </aside>
  );
};

export default SideBar;

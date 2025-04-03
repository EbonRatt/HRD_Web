import React from "react";
import PropTypes from "prop-types";
import { Star } from "lucide-react";
import WorkSpaceComponent from "./WorkSpaceComponent";

function FavoriteWorkspacesComponentList({ workspace }) {
  return (
    <article className="flex flex-col gap-2">
      <div className="flex font-bold text-gray-500 justify-between px-10 items-center">
        <p className="text-2xl">Favorite</p>
        <Star />
      </div>
      <ul className=" overflow-y-scroll max-h-[250px]">
        {workspace
          .filter((workspace) => workspace.isFavorite == false)
          .map((workspaceFavorite) => (
            <li key={workspaceFavorite.workspaceId} className="rounded-sm">
              <WorkSpaceComponent data={workspaceFavorite} />
            </li>
          ))}
      </ul>
    </article>
  );
}

export default FavoriteWorkspacesComponentList;

"use client";

import React, { useState } from "react";
import WorkSpaceComponent from "./WorkSpaceComponent";
import PopupForm from "./PopupForm";
import { useRouter } from "next/navigation";

const WorkspacesComponentList = ({ workspace }) => {
  const router = useRouter();
  function handleGetSpecifyWorkspaceById(workspaceId) {
    router.push(`/todopage/${workspaceId}`);
  }

  return (
    <article className="flex flex-col gap-2">
      <div className="flex font-bold text-gray-500 justify-between px-10 items-center">
        <p className="text-2xl">Workspace</p>
        <PopupForm />
      </div>
      <ul className=" overflow-y-scroll max-h-[250px]">
        {workspace.map((workspace) => (
          <li
            key={workspace.workspaceId}
            className="rounded-sm hover:bg-gray-400 cursor-pointer"
            onClick={() => handleGetSpecifyWorkspaceById(workspace.workspaceId)}
          >
            <WorkSpaceComponent data={workspace} />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default WorkspacesComponentList;

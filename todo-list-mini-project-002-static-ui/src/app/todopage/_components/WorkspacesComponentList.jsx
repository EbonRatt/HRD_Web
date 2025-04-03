"use client";

import React, { useState } from "react";
import WorkSpaceComponent from "./WorkSpaceComponent";
import PopupForm from "./PopupForm";

const WorkspacesComponentList = ({ workspace }) => {
  return (
    <article className="flex flex-col gap-2">
      <div className="flex font-bold text-gray-500 justify-between px-10 items-center">
        <p className="text-2xl">Workspace</p>
        <PopupForm />
      </div>
      <ul className=" overflow-y-scroll max-h-[250px]">
        {workspace.map((workspace) => (
          <li key={workspace.workspaceId} className="rounded-sm">
            <WorkSpaceComponent data={workspace} />
          </li>
        ))}
      </ul>
    </article>
  );
};

export default WorkspacesComponentList;

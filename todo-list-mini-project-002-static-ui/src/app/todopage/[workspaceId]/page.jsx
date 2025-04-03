import React from "react";
import MainContentComponent from "./_components/MainContentComponent";
import TodoPage from "../page";
import {
  getTaskByIdWorkSpace,
  getWorkspaceById,
} from "@/services/todo/todo.service";

const WorkspaceIdPage = async ({ params: ParamsPromise }) => {
  const { workspaceId } = await ParamsPromise;
  const getWorkspaceInformationById = await getWorkspaceById(workspaceId);
  const tasksListByWorkspaceId = await getTaskByIdWorkSpace(workspaceId);

  return (
    <TodoPage workspace={getWorkspaceInformationById}>
      <MainContentComponent
        tasksListByWorkspaceId={tasksListByWorkspaceId.payload}
        titleWorkSpace={getWorkspaceInformationById.payload.workspaceName}
      />
    </TodoPage>
  );
};

export default WorkspaceIdPage;

import headerToken from "@/api/headerToken";
import { baseUrl } from "../constants";

export const getAllWorkspaces = async () => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/workspaces?pageNo=0&pageSize=10&sortBy=workspaceId&sortDirection=ASC`,
    {
      headers: header,
    }
  );
  const data = await res.json();
  return data;
};

export const createWorkspaces = async (workspace) => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/workspace`, {
    headers: header,
    method: "POST",
    body: JSON.stringify(workspace),
    next: { tags: ["workspace"] },
  });
  const data = await res.json();
  return data;
};

export const getWorkspaceById = async (workspaceId) => {
  const header = await headerToken();
  const res = await fetch(`${baseUrl}/workspace/${workspaceId}`, {
    headers: header,
  });
  const data = await res.json();
  return data;
};

export const getTaskByIdWorkSpace = async (workspaceId) => {
  const header = await headerToken();
  const res = await fetch(
    `${baseUrl}/tasks/workspace/${workspaceId}?pageNo=0&pageSize=10&sortBy=taskId&sortDirection=ASC`,
    {
      headers: header,
    }
  );
  const data = await res.json();
  return data;
};

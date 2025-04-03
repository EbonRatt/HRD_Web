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
  const newWorkSpace = {
    workspaceName: workspace,
  };

  const header = await headerToken();

  console.log(header);
  const res = await fetch(`${baseUrl}/workspace`, {
    headers: header,
    method: "POST",
    body: JSON.stringify(newWorkSpace),
  });

  const data = await res.json();
  return data;
};

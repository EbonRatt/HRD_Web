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

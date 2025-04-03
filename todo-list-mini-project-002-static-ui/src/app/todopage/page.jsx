import SideBar from "@/app/todopage/_components/SideBar";
import NavbarComponent from "./_components/NavbarComponent";
import NotFoundComponent from "./_components/NotFoundComponent";
import {
  getAllWorkspaces,
  getWorkspaceById,
} from "@/services/todo/todo.service";
import { getUserService } from "@/services/auth/user.service";

export default async function TodoPage({ children, workspace }) {
  const workspaceData = await getAllWorkspaces();
  const userInform = await getUserService();

  return (
    <section className="container flex min-w-full min-h-full gap-5 ">
      <SideBar workspaceData={workspaceData} />
      <main className="flex flex-col w-full p-6 gap-3">
        <NavbarComponent
          workspaceInformationById={workspace}
          userInform={userInform}
        />
        <hr className="text-gray-400 border-2 rounded-2xl mb-5" />
        {children || <NotFoundComponent />}
      </main>
    </section>
  );
}

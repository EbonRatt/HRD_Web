import { getUserService } from "@/services/auth/user.service";
import { Bell, ChevronRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const NavbarComponent = async ({ userInform, workspaceInformationById }) => {
  return (
    <article className="flex justify-between">
      {/* Route Page */}
      <div className="flex items-center justify-center ">
        {workspaceInformationById.payload && (
          <>
            <Link href={"/todopage"}>Workspace</Link>
            <ChevronRight />
            <span className="text-blue-400 font-semibold border-b-2">
              {workspaceInformationById.payload?.workspaceName}
            </span>
          </>
        )}
      </div>
      {/* Profile Information */}
      <div className="flex items-center gap-2.5">
        <Bell size={30} />
        <div className="flex gap-2 items-center">
          <Image
            className="rounded-full"
            height={100}
            width={60}
            src={
              userInform.payload?.profile ||
              "https://anhcute.net/wp-content/uploads/2024/08/Anh-tranh-chibi-Doraemon-don-gian-dang-yeu.jpg"
            }
          ></Image>
          <div className="font-bold">
            <p>{userInform.payload?.username}</p>
            <span className="text-green-500">{userInform.payload?.email}</span>
          </div>
        </div>
      </div>
      {/* Line */}
    </article>
  );
};

export default NavbarComponent;

import { Bell, ChevronRight } from "lucide-react";
import Image from "next/image";
import React from "react";

const NavbarComponent = () => {
  return (
    <article className="flex justify-between">
      {/* Route Page */}
      <div className="flex items-center font-semibold">
        <span>Workspace</span>
        <ChevronRight />
        <span>HRD Design</span>
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
              "https://anhcute.net/wp-content/uploads/2024/08/Anh-tranh-chibi-Doraemon-don-gian-dang-yeu.jpg"
            }
          ></Image>
          <div className="font-bold">
            <p>Monster</p>
            <span className="text-green-500">Testing@gmail.com</span>
          </div>
        </div>
      </div>
      {/* Line */}
    </article>
  );
};

export default NavbarComponent;

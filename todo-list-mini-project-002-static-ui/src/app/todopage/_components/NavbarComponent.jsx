import { Bell } from "lucide-react";
import Image from "next/image";
import React from "react";

const NavbarComponent = () => {
  return (
    <article className="flex justify-between">
      <div>Page</div>
      <div>
        <Bell />
        <div>
          <Image
            className="rounded-full"
            height={100}
            width={60}
            src={
              "https://anhcute.net/wp-content/uploads/2024/08/Anh-tranh-chibi-Doraemon-don-gian-dang-yeu.jpg"
            }
          ></Image>
          <p>Monster</p>
          <span>@gmail.com</span>
        </div>
      </div>
    </article>
  );
};

export default NavbarComponent;

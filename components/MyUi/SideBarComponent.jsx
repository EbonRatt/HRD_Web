import { listIcon } from "@/Data/ListIcon";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const SideBarComponent = () => {
  return (
    <aside className="bg-whiteSmoke w-[25%] h-screen min-h-full flex flex-col items-center justify-between">
      <section>
        {/* Profile */}
        <article className="flex flex-col items-center gap-1.5 my-10">
          <Image
            alt="Profile Image"
            className=" rounded-full flex justify-center"
            width={160}
            height={160}
            src={
              "https://i.pinimg.com/736x/a0/1b/9c/a01b9c43580ae37e3e4aa152c7d10e9b.jpg"
            }
          />
          <p className="text-center font-semibold text-darkBlue">
            Y Chanphyrat
          </p>
          <div>
            <p className="text-darkGreen font-semibold text-xl">
              ychanphyrat@gmail.com
            </p>
          </div>
        </article>
        {/* List Icon */}
        <nav>
          <ul>
            {listIcon.map((icon, index) => (
              <li
                key={index}
                className="py-3 px-4 flex gap-2 rounded-2xl text-darkBlue font-medium hover:bg-darkGrey hover:font-extrabold"
              >
                <div className="text-darkRed">{icon.icon}</div>
                <Link href={`${icon.link}`}>{icon.titleLink}</Link>
              </li>
            ))}

            {/* Setting */}
            <li
              key={"Setting"}
              className="p-4 text-darkBlue flex gap-1 mt-10 text-2xl justify-center items-center bg-darkGrey rounded-2xl "
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.325.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 0 1 1.37.49l1.296 2.247a1.125 1.125 0 0 1-.26 1.431l-1.003.827c-.293.241-.438.613-.43.992a7.723 7.723 0 0 1 0 .255c-.008.378.137.75.43.991l1.004.827c.424.35.534.955.26 1.43l-1.298 2.247a1.125 1.125 0 0 1-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.47 6.47 0 0 1-.22.128c-.331.183-.581.495-.644.869l-.213 1.281c-.09.543-.56.94-1.11.94h-2.594c-.55 0-1.019-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 0 1-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 0 1-1.369-.49l-1.297-2.247a1.125 1.125 0 0 1 .26-1.431l1.004-.827c.292-.24.437-.613.43-.991a6.932 6.932 0 0 1 0-.255c.007-.38-.138-.751-.43-.992l-1.004-.827a1.125 1.125 0 0 1-.26-1.43l1.297-2.247a1.125 1.125 0 0 1 1.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.086.22-.128.332-.183.582-.495.644-.869l.214-1.28Z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
              <Link href={"/#"}>Settings</Link>
            </li>
          </ul>
        </nav>
      </section>
    </aside>
  );
};

export default SideBarComponent;

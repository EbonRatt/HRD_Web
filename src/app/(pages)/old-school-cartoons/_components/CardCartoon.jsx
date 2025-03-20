"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const CardCartoon = ({ cartoon }) => {
  const formatDateOnlyYear = (date) => {
    const newDate = date.split("-");
    return newDate[0];
  };

  const router = useRouter();

  function handleLink(id) {
    router.push(`/read-full-article/${id}?type=cartoon`);
  }
  return (
    <article
      className="flex flex-col justify-around"
      onClick={() => handleLink(cartoon.id)}
    >
      <Image
        alt=""
        className="rounded-2xl object-cover"
        height={200}
        width={200}
        src={cartoon.image}
      ></Image>

      <h2 className="text-darkBlue font-semibold">{cartoon.ct_title}</h2>
      <span className="text-darkGreen font-semibold flex gap-3 items-center">
        {/* Icons Watched */}
        <svg
          className="w-4 h-4 text-teal-500"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
          />
        </svg>
        {cartoon.view_count} Times |{" "}
        {formatDateOnlyYear(cartoon.published_year)}
      </span>
    </article>
  );
};

export default CardCartoon;

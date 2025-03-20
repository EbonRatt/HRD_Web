"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const CardImage = ({ image, text, href }) => {
  return (
    <div className="flex flex-row justify-center items-center flex-wrap gap-20 ">
      <Link
        href={href}
        className="relative isolate flex flex-col justify-end overflow-hidden rounded-3xl px-8 pb-8 pt-40 w-[314px] h-[471px] group"
      >
        <img
          src={`/static/images/${image}`}
          alt="wisper"
          className="absolute inset-0 h-full w-full object-cover transition-all duration-300 group-hover:brightness-60"
        />
        <span className="absolute top-3 left-3 z-10 bg-white text-darkBlue w-fit flex justify-center items-center gap-2 px-2 py-1 rounded-3xl">
          <svg
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-[20px] ml-2"
          >
            <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M4.72848 16.1369C3.18295 14.5914 2.41018 13.8186 2.12264 12.816C1.83509 11.8134 2.08083 10.7485 2.57231 8.61875L2.85574 7.39057C3.26922 5.59881 3.47597 4.70292 4.08944 4.08944C4.70292 3.47597 5.59881 3.26922 7.39057 2.85574L8.61875 2.57231C10.7485 2.08083 11.8134 1.83509 12.816 2.12264C13.8186 2.41018 14.5914 3.18295 16.1369 4.72848L17.9665 6.55812C20.6555 9.24711 22 10.5916 22 12.2623C22 13.933 20.6555 15.2775 17.9665 17.9665C15.2775 20.6555 13.933 22 12.2623 22C10.5916 22 9.24711 20.6555 6.55812 17.9665L4.72848 16.1369Z"
                stroke="#087e8b"
                strokeWidth="1.5"
              ></path>
              <circle
                cx="8.60724"
                cy="8.87891"
                r="2"
                transform="rotate(-45 8.60724 8.87891)"
                stroke="#087e8b"
                strokeWidth="1.5"
              ></circle>
              <path
                d="M11.5417 18.5L18.5208 11.5208"
                stroke="#087e8b"
                strokeWidth="1.5"
                strokeLinecap="round"
              ></path>
            </g>
          </svg>
          <span className="text-md font-bold text-deep-teal">Book</span>
        </span>

        {/* Pop-up Text  */}
        <div className="absolute inset-0 flex justify-center items-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <p className="text-white text-4xl font-bold w-[175px] h-[150px] text-center">
            {text}
          </p>
        </div>
      </Link>
    </div>
  );
};

export default CardImage;

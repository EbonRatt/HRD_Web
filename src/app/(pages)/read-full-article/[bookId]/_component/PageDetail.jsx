import Image from "next/image";
import React from "react";

const PageDetail = ({ detail }) => {
  const formatDateOnlyYear = (date) => {
    const newDate = date.split("-");
    return newDate[0];
  };
  return (
    <article className="bg-whiteSmoke w-full h-full rounded-tl-4xl rounded-tr-4xl relative">
      <figure className=" absolute top-[-100px] right-50">
        <Image
          className="rounded-2xl"
          height={300}
          width={300}
          src={detail.image}
        ></Image>
      </figure>
      <div className="w-full mt-[15%]  p-[5%] flex flex-col gap-3">
        <h2 className="text-darkBlue font-bold text-2xl">
          {detail.book_title || detail.ct_title}
        </h2>
        <h3 className="text-darkBlue flex items-center gap-2 font-bold">
          by
          <span className="text-darkGreen font-semibold text-xl">
            {detail.book_author || detail.ct_creator}
          </span>
        </h3>
        {/* Only For Cartoon */}
        {detail.ct_title && (
          <h3 className="flex items-center space-x-2 text-gray-500">
            <svg
              className="w-5 h-5 text-teal-500"
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
            <span>{detail.view_count} times</span>
            <span>|</span>
            <span>{formatDateOnlyYear(detail.published_year)}</span>
          </h3>
        )}
        <p className="text-darkBlue text-justify">
          {detail.description || detail.ct_description}
        </p>
      </div>
    </article>
  );
};

export default PageDetail;

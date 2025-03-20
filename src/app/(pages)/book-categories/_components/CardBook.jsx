"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import React from "react";

const CardBook = ({ book }) => {
  const router = useRouter();

  function handleLink(id) {
    router.push(`/read-full-article/${id}?type=book`);
  }

  return (
    <>
      <div className="flex gap-5 items-center bg-gray-100 p-6 rounded-xl shadow-lg w-full max-w-lg mt-[30%]">
        <div className=" flex flex-col justify-between gap-2 min-w-[50%]">
          <div className="relative w-full h-[150px]">
            <Image
              src={book.image}
              alt=""
              width={150}
              height={100}
              className="rounded-lg shadow-md w-full h-[300px] object-cover absolute top-[-150px] left-0"
            />
          </div>
          <button
            onClick={() => handleLink(book.id)}
            className=" bg-darkGrey text-darkBlue w-full text-sm font-semibold  px-4 py-2 rounded-lg hover:cursor-pointer"
          >
            READ FULL ARTICLE
          </button>
        </div>

        <div className="ml-6">
          <h2 className="text-lg text-darkBlue font-semibold">
            {book.book_title}
          </h2>
          <p className="text-darkBlue text-sm mt-2 line-clamp-4">
            {book.description}
          </p>
        </div>
      </div>
    </>
  );
};

{
}

export default CardBook;

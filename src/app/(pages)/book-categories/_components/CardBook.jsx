import Link from "next/link";
import React from "react";

const CardBook = ({ book }) => {
  return (
    <div className="bg-[#f5f7f8] rounded-2xl shadow-lg flex items-center w-[420px]">
      <div className="w-1/3 flex-shrink-0">
        <img
          className="rounded-lg"
          src={book.image}
          alt=""
          width={120}
          height={180}
          objectfit="cover"
        />
      </div>
      <div className="w-2/3">
        <h3 className="text-lg font-semibold text-[#0b3954]">{book.title}</h3>
        <p className="mt-2 text-gray-600 text-sm line-clamp-3 mr-2">
          {book.description}
        </p>
        <Link href={`/read-full-article/${book.id}`}>
          <button className="mt-4 bg-blue-500 text-white text-sm px-4 py-2 rounded-full shadow-md hover:bg-blue-600 transition">
            Read Full Article
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardBook;

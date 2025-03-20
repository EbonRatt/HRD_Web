"use client";

import React, { useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const SelectComponent = ({ type }) => {
  const [categoryTitle, setCategoryTitle] = useState();
  const pathName = usePathname();
  const router = useRouter();

  function handleSelect(e) {
    router.push(`${pathName}?query=${e.target.value}`);
    setCategoryTitle(type.filter((type) => type.id == e.target.value)?.[0]);
  }

  return (
    <>
      <span className="w-fit mb-5 px-6 py-2 bg-gray-200 text-darkGreen font-bold rounded-3xl">
        {categoryTitle?.book_cate_name == null && pathName == "/book-categories"
          ? "All Books"
          : categoryTitle?.book_cate_name}
        {categoryTitle?.cartoon_genre == null &&
        pathName == "/old-school-cartoons"
          ? "Old School Cartoons"
          : categoryTitle?.cartoon_genre}
      </span>
      <select onChange={handleSelect}>
        <option>Select A Category</option>
        {type.map((type, index) => (
          <option key={index} value={type.id}>
            {type.book_cate_name || type.cartoon_genre}
          </option>
        ))}
      </select>
    </>
  );
};

export default SelectComponent;

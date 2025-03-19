"use client";

import React from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { usePathname, useRouter } from "next/navigation";

const SelectComponent = ({ type }) => {
  const pathName = usePathname();
  const router = useRouter();

  function handleSelect(e) {
    console.log(e.target.value);
  }

  return (
    <select>
      <option defaultValue={""}>Select A Category</option>
      {type.map((type) => (
        <option value={type.book_cate_id || type.ct_genre_id}>
          {type.book_cate_name || type.cartoon_genre}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;

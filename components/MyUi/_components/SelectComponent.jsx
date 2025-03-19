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
    router.push(`${pathName}?query=${e.target.value}`);
  }

  return (
    <select onChange={handleSelect}>
      <option defaultValue={""}>Select A Category</option>
      {type.map((type, index) => (
        <option key={index} value={type.id}>
          {type.book_cate_name || type.cartoon_genre}
        </option>
      ))}
    </select>
  );
};

export default SelectComponent;

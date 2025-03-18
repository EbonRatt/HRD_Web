import Image from "next/image";
import React from "react";

const CardCartoon = ({ cartoon }) => {
  const formatDateOnlyYear = (date) => {
    const newDate = date.split("-");
    return newDate[0];
  };
  return (
    <article className="flex flex-col justify-around">
      <Image
        className="rounded-2xl object-cover"
        height={200}
        width={200}
        src={cartoon.image}
      ></Image>
      <h2 className="text-darkBlue font-semibold">{cartoon.ct_title}</h2>
      <span className="text-darkGreen font-semibold">
        {cartoon.view_count} Times |{" "}
        {formatDateOnlyYear(cartoon.published_year)}
      </span>
    </article>
  );
};

export default CardCartoon;

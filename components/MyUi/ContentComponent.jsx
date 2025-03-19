import React from "react";
import SideBarComponent from "./SideBarComponent";

import Input from "./Input";
import CardBook from "@/src/app/(pages)/book-categories/_components/CardBook";
import CardCartoon from "@/src/app/(pages)/old-school-cartoons/_components/CardCartoon";
import SelectComponent from "./_components/SelectComponent";

const ContentComponent = ({ item, type }) => {
  return (
    <section className="flex">
      <SideBarComponent />
      <section className="flex flex-col gap-5 w-full px-[5%] pt-[2%]">
        <Input />
        <article className=" bg-whiteSmoke h-full p-[5%] rounded-2xl w-full ">
          {/* Title HomePage */}
          <figure className="flex flex-col ">
            <div className="flex justify-between">
              <span className="w-fit mb-5 px-6 py-2 bg-gray-200 text-darkGreen font-bold rounded-3xl">
                HomePage
              </span>
              <SelectComponent type={type} />
            </div>
            <hr className="border-darkGreen"></hr>
          </figure>
          {/*List Cards */}
          <article className="py-14 px-14 no-scrollbar overflow-y-auto">
            <div
              className={`grid grid-cols-1 md:grid-cols-${
                item[0]?.book_title ? "2" : "3"
              } gap-10 container mx-auto px-6 max-h-[600px]`}
            >
              {/* List Book */}
              {item.map(
                (thisItem) =>
                  thisItem.book_title && (
                    <CardBook key={thisItem.id} book={thisItem} />
                  )
              )}
              {item.map(
                (thisItem) =>
                  thisItem.ct_title && (
                    <CardCartoon key={thisItem.id} cartoon={thisItem} />
                  )
              )}
            </div>
          </article>
        </article>
      </section>
    </section>
  );
};

export default ContentComponent;

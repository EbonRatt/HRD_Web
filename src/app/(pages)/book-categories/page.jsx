import Input from "@/components/MyUi/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getAllBook, getAllBookCategories } from "@/Service/BookService";
import Image from "next/image";
import React from "react";
import CardBook from "./_components/CardBook";
import SideBarComponent from "@/components/MyUi/SideBarComponent";

const BookCategoriesPage = async () => {
  const { payload: bookCategories } = await getAllBookCategories();
  const { payload: book } = await getAllBook();

  return (
    <section className="flex ">
      <SideBarComponent />
      <section className="flex flex-col gap-5 w-full px-[5%] pt-[2%]">
        <Input />
        <article className=" bg-whiteSmoke h-screen p-[5%] rounded-2xl w-full min-h-full ">
          {/* Title HomePage */}
          <figure className="flex flex-col ">
            <div className="flex justify-between">
              <span className="w-fit mb-5 px-8 py-4 bg-gray-200 text-darkGreen font-bold rounded-3xl">
                HomePage
              </span>
              <Select>
                <SelectTrigger className="w-[180px] bg-gray-200 p-4">
                  <SelectValue placeholder="Select a Category" />
                </SelectTrigger>
                <SelectContent>
                  {/* ON API */}
                  {bookCategories.map((category) => (
                    <SelectItem
                      key={category.id}
                      value={`${category.book_cate_name}`}
                    >
                      {category.book_cate_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <hr className="border-darkGreen"></hr>
          </figure>
          {/*List Cards */}
          <article className="py-14 px-14  overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 container mx-auto px-6 max-h-[600px]">
              {/* List Book */}
              {book.map((thisBook) => (
                <CardBook book={thisBook} />
              ))}
              {/* <p className="text-center p-4 text-gray-500">No books available.</p> */}
            </div>
          </article>
        </article>
      </section>
    </section>
  );
};

export default BookCategoriesPage;

import {
  getAllBook,
  getAllBookCategories,
  getBookByCategory,
  getBookByTitle,
} from "@/Service/BookService";
import Image from "next/image";
import React from "react";
import CardBook from "./_components/CardBook";
import ContentComponent from "@/components/MyUi/ContentComponent";

const BookCategoriesPage = async ({ searchParams }) => {
  console.log(searchParams.query);
  const { payload: bookCategories } = await getAllBookCategories();
  const { payload: bookTitle } = await getBookByTitle(searchParams.search);
  const { payload: bookByCategory } = await getBookByCategory(
    searchParams.query
  );
  const { payload: book } = await getAllBook();

  return (
    <section>
      <ContentComponent
        item={
          bookTitle.length > 0
            ? bookTitle
            : bookByCategory.length > 0
            ? bookByCategory
            : book
        }
        type={bookCategories}
      />
    </section>
  );
};

export default BookCategoriesPage;

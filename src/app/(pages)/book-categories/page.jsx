import {
  getAllBook,
  getAllBookCategories,
  getBookByTitle,
} from "@/Service/BookService";
import Image from "next/image";
import React from "react";
import CardBook from "./_components/CardBook";
import ContentComponent from "@/components/MyUi/ContentComponent";

const BookCategoriesPage = async ({ searchParams }) => {
  const { payload: bookCategories } = await getAllBookCategories();
  const { payload: bookTitle } = await getBookByTitle(searchParams.search);
  const { payload: book } = await getAllBook();

  return (
    <section>
      <ContentComponent
        item={bookTitle.length > 0 ? bookTitle : book}
        type={bookCategories}
      />
    </section>
  );
};

export default BookCategoriesPage;

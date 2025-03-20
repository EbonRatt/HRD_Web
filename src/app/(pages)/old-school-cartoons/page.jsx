import React from "react";
import {
  getAllCartoon,
  getAllCartoonGenre,
  getCartoonByGenre,
  getCartoonByTitle,
} from "@/Service/CartoonService";
import ContentComponent from "@/components/MyUi/ContentComponent";

const OldSchoolCartoonPage = async ({ searchParams }) => {
  const { payload: cartoonGenre } = await getAllCartoonGenre();
  const { payload: cartoonByTitle } = await getCartoonByTitle(
    searchParams.search
  );
  const { payload: cartoon } = await getAllCartoon();
  const { payload: cartoonByGenre } = await getCartoonByGenre(
    searchParams.query
  );
  return (
    <section>
      <ContentComponent
        type={cartoonGenre}
        item={
          cartoonByTitle.length > 0
            ? cartoonByTitle
            : cartoonByGenre.length > 0
            ? cartoonByGenre
            : cartoon
        }
      />
    </section>
  );
};

export default OldSchoolCartoonPage;

import Input from "@/components/MyUi/Input";
import SideBarComponent from "@/components/MyUi/SideBarComponent";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React from "react";
import { getAllCartoon, getAllCartoonGenre } from "@/Service/CartoonService";
import CardCartoon from "./_components/CardCartoon";

const OldSchoolCartoonPage = async () => {
  const { payload: cartoonGenre } = await getAllCartoonGenre();
  const { payload: cartoon } = await getAllCartoon();
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
                Old School Cartoon
              </span>
              <Select>
                <SelectTrigger className="w-[180px] bg-gray-200 p-4">
                  <SelectValue placeholder="Select a Category" />
                </SelectTrigger>
                <SelectContent>
                  {/* ON API */}
                  {cartoonGenre.map((genre) => (
                    <SelectItem key={genre.id} value={`${genre.cartoon_genre}`}>
                      {genre.cartoon_genre}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <hr className="border-darkGreen"></hr>
          </figure>
          {/*List Cards */}
          <article className="py-14 px-14  overflow-y-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 container mx-auto px-6 max-h-[600px]">
              {/* List Book */}
              {cartoon.map((thisCartoon) => (
                <CardCartoon key={thisCartoon.id} cartoon={thisCartoon} />
              ))}
              {/* <p className="text-center p-4 text-gray-500">No books available.</p> */}
            </div>
          </article>
        </article>
      </section>
    </section>
  );
};

export default OldSchoolCartoonPage;

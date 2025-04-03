import React from "react";
import ListCard from "./ListCard";
import { PlusSquare, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const MainContent = () => {
  return (
    <section className=" flex flex-col gap-5 relative">
      <article className="flex justify-between items-center">
        <h2 className="text-4xl font-semibold">HRD Design</h2>
        <div className="bg-gray-300 p-1 rounded-xl">
          <Star size={30} />
        </div>
      </article>
      <article className="flex justify-between">
        {/* Not Started */}
        <div className=" min-w-[450px] ">
          <span className="text-red-500 text-2xl font-semibold">
            Not Started
          </span>
          <hr className="border-2 text-red-500 mt-2 rounded-3xl"></hr>
          <div className="overflow-y-scroll max-h-[600px]">
            <ListCard />
            <ListCard />
            <ListCard />
          </div>
        </div>

        {/* In Progress */}
        <div className="min-w-[400px]">
          <span className="text-blue-500 text-2xl font-semibold">
            In Progress
          </span>
          <hr className="border-2 text-blue-500 mt-2 rounded-3xl"></hr>
        </div>

        {/* Finished */}
        <div className="min-w-[400px]">
          <span className="text-green-500 text-2xl font-semibold">
            Finished
          </span>
          <hr className="border-2 text-green-500 mt-2 rounded-3xl"></hr>
          <ListCard />
        </div>
      </article>

      {/* Add New Tasks */}
      <article className="w-full flex justify-end absolute bottom-[-50px] right-10">
        <Button className="  font-extrabold text-white bg-blue-400 rounded-xl">
          <PlusSquare />
          New Task
        </Button>
      </article>
    </section>
  );
};

export default MainContent;

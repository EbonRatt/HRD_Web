"use client";

import React, { useEffect, useState } from "react";
import ListCard from "../../_components/ListCard";
import { PlusSquare, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const MainContentComponent = ({ tasksListByWorkspaceId, titleWorkSpace }) => {
  const [taskNotYet, setTaskNotYet] = useState([]);
  const [taskInProcessing, setTaskInProcessing] = useState([]);
  const [taskComplete, setTaskComplete] = useState([]);

  useEffect(() => {
    setTaskNotYet(
      tasksListByWorkspaceId.filter(
        (taskStatus) => taskStatus.status == "NOT_STARTED"
      )
    );
    setTaskInProcessing(
      tasksListByWorkspaceId.filter(
        (taskStatus) => taskStatus.status == "IN_PROGRESS"
      )
    );
    setTaskComplete(
      tasksListByWorkspaceId.filter(
        (taskStatus) => taskStatus.status == "FINISHED"
      )
    );
  }, [titleWorkSpace]);

  console.log("Task Not Yet", taskNotYet);
  console.log("Task In Processing", taskInProcessing);
  console.log("Task Complete", taskComplete);

  return (
    <section className=" flex flex-col gap-5 relative">
      {/* Header Title WorkSpace And Star */}
      <article className="flex justify-between items-center">
        <h2 className="text-4xl font-semibold">{titleWorkSpace}</h2>
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
          <div className="overflow-y-scroll min-h-[600px] max-h-[600px]">
            {taskNotYet.map((task) => (
              <ListCard key={task.taskId} task={task} />
            ))}
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

export default MainContentComponent;

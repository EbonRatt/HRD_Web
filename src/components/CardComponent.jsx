import { EllipsisVertical } from "lucide-react";
import React from "react";

export default function CardComponent({ tasks }) {
  function calculateDate(date) {
    const today = new Date();
    const myDueDate = new Date(date);
    const remainingDay = Math.ceil((myDueDate - today) / (1000 * 60 * 60 * 24));

    return remainingDay;
  }

  function formatDate(date) {
    const newDate = new Date(date);
    return newDate.toLocaleDateString("en-US", {
      weekday: "short",
      month: "short",
      day: "2-digit",
      year: "numeric",
    });
  }

  return (
    <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {tasks.map((task, index) => (
        <div
          key={index}
          className="max-w-sm p-6 bg-white rounded-2xl shadow-sm dark:bg-gray-800 dark:border-gray-700"
        >
          <div className="flex justify-between mb-5">
            <div
              className={`${
                (task.progress == "100" && "text-custom-sky-blue") ||
                (task.progress == "75" && "text-custom-carrot") ||
                (task.progress == "50" && "text-custom-yellow-500") ||
                (task.progress == "25" && "text-custom-pink")
              } font-medium`}
            >
              {formatDate(task.dueDate)}
            </div>
            <EllipsisVertical size={20} color="#374957" />
          </div>

          <h5 className="capitalize mb-2 text-2xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {task.projectName}
          </h5>
          <p className="line-clamp-2 mb-3 font-normal text-justify text-gray-400 dark:text-gray-400">
            {task.description === ""
              ? "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,"
              : task.description}
          </p>

          {/* progress bar */}
          <div className="w-full flex justify-between font-medium mb-1">
            <p>Progress</p>
            <p>
              {(task.progress == "100" && "100%") ||
                (task.progress == "75" && "75%") ||
                (task.progress == "50" && "50%") ||
                (task.progress == "25" && "25%")}
            </p>
          </div>
          <div className="relative mb-5 w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            {task.progress == "100" && (
              <div className="bg-custom-sky-blue h-2.5 rounded-full"></div>
            )}

            {task.progress == "25" && (
              <div
                className=" rounded-full bg-custom-pink h-2.5 w-[25%] "
                title="25%"
              ></div>
            )}

            {task.progress == "50" && (
              <div
                className="rounded-full bg-custom-yellow-500 h-2.5 w-[50%]"
                title="50%"
              ></div>
            )}

            {task.progress == "75" && (
              <div
                className="rounded-full bg-custom-carrot h-2.5 w-[75%] "
                title="75%"
              ></div>
            )}
          </div>

          {/* deadline */}
          <div className="flex justify-end">
            <p className="font-medium bg-light-gray py-1.5 px-4 rounded-lg max-w-28 text-center">
              {calculateDate(task.dueDate) > 7 ? (
                <div>{Math.floor(calculateDate(task.dueDate) / 7)} Weeks</div>
              ) : calculateDate(task.dueDate) === 0 ? (
                <div>Today</div>
              ) : (
                <div>{calculateDate(task.dueDate)} Days</div>
              )}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

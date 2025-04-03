"use client";
import { insertWorkSpaceAction } from "@/action/workspacesAction";
import { formCreateWorkspaceSchema } from "@/lib/zod/userSchema";
import { zodResolver } from "@hookform/resolvers/zod";
import { SquarePlus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function PopupForm() {
  const [isOpen, setIsOpen] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(formCreateWorkspaceSchema),
  });

  function handleCreateWorkSpace(data) {
    insertWorkSpaceAction(data);
    reset();
  }

  return (
    <div>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className="text-gray-300 font-bold py-2 px-4 rounded"
      >
        <SquarePlus />
      </button>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 flex items-center justify-center min-h-screen bg-[rgba(0,0,0,0.4)]  backdrop-blur-md z-50">
          <div className="bg-white w-[450px] p-6 rounded-lg shadow-lg">
            <div className="flex justify-end">
              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="text-gray-700 hover:text-red-500"
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  ></path>
                </svg>
              </button>
            </div>
            <h2 className="text-2xl font-bold mb-4">Create New Workspace</h2>

            <form onSubmit={handleSubmit(handleCreateWorkSpace)}>
              <div className="mb-4">
                <input
                  type="text"
                  id="workspaceName"
                  name="workspaceName"
                  placeholder="Please type your workspace name"
                  className="w-full p-2 border rounded-md focus:outline-none focus:border-blue-500"
                  {...register("workspaceName")}
                />
                <span className="text-red-500 text-sm mt-4">
                  {errors?.workspaceName?.message}
                </span>
              </div>

              <button
                type="submit"
                className="bg-blue-500 text-white font-bold py-2 px-4 rounded hover:bg-blue-700"
              >
                Create
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

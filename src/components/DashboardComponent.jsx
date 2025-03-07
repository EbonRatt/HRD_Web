import React from "react";
import { dashboard } from "../data/dashboard";
import FilterComponent from "./FilterComponent";

export default function DashboardComponent() {
  return (
    <div>
      <h2 className="text-xl font-semibold mb-5">Dashboard</h2>

      {/* display summary on each card */}
      <div className="flex gap-5">
        {dashboard.map((dashboard) => (
          <div
            key={dashboard.id}
            className="flex bg-white gap-5 py-3.5 px-4 rounded-xl w-auto"
          >
            <div className={`p-3 rounded-xl ${dashboard.color}`}>
              <img src={dashboard.icon} alt="file icon" />
            </div>
            <div>
              <p className="text-xl font-semibold">{dashboard.totalTasks}</p>
              <p className="text-gray-400">{dashboard.label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

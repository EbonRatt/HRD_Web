import { useState } from "react";
import "./App.css";
import AddNewProjectComponent from "./components/AddNewProjectComponent";
import AssignmentsComponent from "./components/AssignmentsComponent";
import CardComponent from "./components/CardComponent";
import DashboardComponent from "./components/DashboardComponent";
import LearningMaterialsComponent from "./components/LearningMaterialsComponent";
import SidebarComponent from "./components/SidebarComponent";
import TopNavbarComponent from "./components/TopNavbarComponent";

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchTasks, setSearchTasks] = useState([]);

  function addNewTask(task) {
    setTasks([...tasks, task]);
    setSearchTasks([...tasks, task]);
  }

  function handleSearch(search) {
    setSearchTasks(
      search.length > 0
        ? searchTasks.filter((task) =>
            task.projectName.toLowerCase().includes(search.toLowerCase())
          )
        : tasks
    );
  }

  return (
    <section className="flex h-screen">
      <div className="w-[20%]">
        <SidebarComponent />
      </div>
      <div className="w-full">
        <div className=" pl-4 ">
          <TopNavbarComponent handleSearch={handleSearch} />
        </div>
        <div className="flex my-10 justify-between w-full">
          <div className="w-[80%] mx-10 ">
            <DashboardComponent />
            <div className="flex justify-between my-10">
              <AssignmentsComponent />
              <AddNewProjectComponent addNewTask={addNewTask} />
            </div>
            <div className=" h-[60vh] overflow-auto">
              <CardComponent tasks={searchTasks} />
            </div>
          </div>
          <div>
            <LearningMaterialsComponent />
          </div>
        </div>
      </div>
    </section>
  );
}

export default App;

const inputField = document.getElementById("input");
const datepicker = document.getElementById("datepicker");
const btnAddTask = document.getElementById("btnTask");
const options = document.getElementById("priority");
const dateError = document.getElementById("dateError");
const textError = document.getElementById("textError");
const row = document.getElementById("table");

// Date
const formattedDate = new Date().toLocaleDateString();
let tasks = [];
btnAddTask.addEventListener("click", function () {
  let inputDate = new Date(datepicker.value);
  let currentDate = new Date();
  currentDate.setHours(0, 0, 0, 0);

  if (
    inputField.value === "" &&
    datepicker.value === "" &&
    options.value === "null"
  ) {
    textError.classList.remove("invisible");
    dateError.classList.remove("invisible");
    return;
  }

  if (inputField.value === "") {
    textError.classList.remove("invisible");
    return;
  } else {
    textError.classList.add("invisible");
  }

  if (inputDate == "Invalid Date") {
    dateError.classList.remove("invisible");
    return;
  } else {
    dateError.classList.add("invisible");
  }

  if (inputDate < currentDate) {
    dateError.classList.remove("invisible");
    dateError.innerText = "Date Can't Be in the Past";
    return;
  } else {
    dateError.classList.add("invisible");
  }

  const new_task = {
    task: inputField.value,
    date: datepicker.value,
    priority: options.value === "null" ? "high" : options.value,
    status: false,
  };

  // Push To Array Tasks
  tasks.push(new_task);
  cleanForm();

  // Add ROW To HTML
  table.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let row = document.createElement("tr");
    // row.setAttribute("id", i);
    row.classList.add(
      "odd:bg-white",
      "odd:dark:bg-gray-900",
      "even:bg-gray-50",
      "even:dark:bg-gray-800",
      "border-b",
      "dark:border-gray-700",
      "border-gray-200"
    );

    row.innerHTML = `
<th scope="row"
    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
    ${tasks[i].task}
</th>
<td class="px-6 py-4">
    ${tasks[i].date}
</td>
<td class="px-6 py-4 ${
      tasks[i].priority === "high"
        ? "text-red-500"
        : tasks[i].priority === "medium"
        ? "text-yellow-300"
        : "text-green-500"
    }">
    ${tasks[i].priority.toUpperCase()}
</td>
<td class="px-6 py-4 ">
    <button id = "${i}" class="p-4 rounded-lg text-white
      bg-yellow-500 transition-all duration-1000 ease-in-out">Pending</button>
</td>
`;

    document.getElementById("table").appendChild(row);
    document.getElementById(`${i}`).addEventListener("click", (e) => {
      let element = document.getElementById(`${i}`);

      if (element.innerText === "Completed") {
        element.innerText = "Pending";
        element.classList.remove("bg-green-400");
        element.classList.add("bg-yellow-500");
      } else {
        element.innerText = "Completed";
        element.classList.remove("bg-yellow-500");
        element.classList.add("bg-green-400");
      }
    });
  }
});

function cleanForm() {
  inputField.value = "";
  datepicker.value = "";
}

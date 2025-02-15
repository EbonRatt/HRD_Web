const inputField = document.getElementById("input");
const datepicker = document.getElementById("datepicker");
const btnAddTask = document.getElementById("btnTask");
const options = document.getElementById("priority");
const row = document.getElementById("table");

let tasks = [];
btnAddTask.addEventListener("click", function () {
  const new_task = {
    task: inputField.value || "Empty",
    date: datepicker.value || "01/29/2025",
    priority: options.value || "high",
    status: false,
  };

  tasks.push(new_task);

  table.innerHTML = "";
  for (let i = 0; i < tasks.length; i++) {
    let row = document.createElement("tr");
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
    ${tasks[i].task}"
</th>
<td class="px-6 py-4">
    ${tasks[i].date}
</td>
<td class="px-6 py-4">
    ${tasks[i].priority}
</td>
<td class="px-6 py-4 ">
    <button id = "status" class=" p-4 rounded-lg text-white ${
      tasks[i].status ? "bg-green-400" : "bg-yellow-500 "
    } ">${tasks[i].status ? "Completed" : " Pending"}</button>
</td>

`;
    document.getElementById("table").appendChild(row);
  }
});

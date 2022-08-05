import { Project, projectHandler } from "./project";
import { eventHandler } from "./event";

const displayController = (() => {

  const projectContainer = document.querySelector(".projectContainer");

  const updateProjects = () => {
    const projects = projectHandler.getProjects();
    projectContainer.innerHTML = "";

    projects.forEach((e) => createButton(e));

    addSelectListeners();
  };

  const createButton = (project) => {

    let btn = document.createElement("button");
    let projectName = project.getName();

    btn.innerHTML = projectName;
    btn.classList.add("name", projectName);

    projectContainer.appendChild(btn);
  };

  const updateTasks = (project) => {
    const tasks = project.getTasks();
    const taskContainer = document.querySelector(".taskContainer");
    taskContainer.innerHTML = "";

    if (tasks) tasks.forEach((e) => createCard(e));
  };

  const createCard = (task) => {
    let card,
      cardName = document.createElement("div");
    card.classList.add("taskCard");

    cardName.classList.add("title");
    cardName.innerHTML = task.getName();
    card.appendChild(cardName);

    taskContainer.appendChild(card);
  };

  const clearInputs = () => {
    const inputs = document.querySelectorAll("input");
    inputs.forEach((e) => {
      e.value = "";
    });
  };

  const addSelectListeners = () => {
    const selectProjectBtns = document.querySelectorAll(".selectProjectBtn");
    selectProjectBtns.forEach((e) => {
      e.addEventListener("click", function () {
        console.log(e.name);
        eventHandler.selectProject(e.name);
      });
    });
  };

  return { updateProjects, updateTasks, clearInputs };
})();

const overlayController = (() => {

  let overlay = document.querySelector(".taskInput");
  let addBtn = document.querySelector(".taskBtn");
  //let submitBtn = document.querySelector();
  

  const toggleContainer = (element) => {

    if (element.style.display === "flex") {
      element.style.display = "none";
    } else {
      element.style.display = "flex";
    }
  };

  addBtn.addEventListener("click", () => toggleContainer(overlay))

})();




export { displayController };

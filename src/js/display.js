import { Project, projectHandler } from "./project";
import { eventHandler } from "./event";
import { Task } from "./task";
import { elementCreator } from "./elementCreator";

const displayController = (() => {
  const projectContainer = document.querySelector(".projectContainer");
  const taskContainer = document.querySelector(".taskContainer");

  const updateProjects = () => {
    const projects = projectHandler.getProjects();
    projectContainer.innerHTML = "";

    projects.forEach((e) => elementCreator.createProjectButton(e));
    addSelectListeners();
    addSelectedBtnStyle();
  };

  const updateTasks = (project) => {
    const tasks = project.getTasks();

    taskContainer.innerHTML = "";
    if (tasks) tasks.forEach((e) => elementCreator.createCard(e));
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
        eventHandler.selectProject(e.name);
        addSelectedBtnStyle();
      });
    });
  };

  const addSelectedBtnStyle = () => {
    let project = eventHandler.getCurrentProject();
    let btn = document.querySelector(`button[name=${project}]`);
    let oldSelected = document.querySelector(".selected");
    if (oldSelected) oldSelected.classList.remove("selected");

    btn.classList.toggle("selected");
  };

  return { updateProjects, updateTasks, clearInputs, addSelectedBtnStyle };
})();

const overlayController = (() => {
  const overlay = document.querySelector("#taskInputOverlay");

  const toggleContainer = (element) => {
    element.classList.toggle("toggle");
  };

  const getInputs = () => {
    let inputs = document.querySelectorAll(".taskInput");
    if (!formVerification(inputs) || desc === "") return false;
    let newTask = Task(
      inputs[0].value,
      inputs[3].value,
      inputs[1].value,
      inputs.dueDate,
      inputs[2].checked ? "High" : "Low"
    );

    return newTask;
  };

  const submitTask = () => {
    let currentProjectName = eventHandler.getCurrentProject();
    let currentProject = projectHandler.findProject(currentProjectName);
    let newTask = getInputs();

    currentProject.addTask(newTask);
    displayController.clearInputs();
    displayController.updateTasks(currentProject);
    toggleContainer(overlay);
  };

  const formVerification = (inputArr) => {
    console.log(inputArr);
    let output = true;
    for (let i = 0; i < inputArr.length; i++) {
      if (inputArr[i].value === "" && inputArr[i].type != "checkbox") {
        console.log(inputArr[i].type);
        output = false;
      }
    }

    return output;
  };

  const createOverlay = () => {
    let addBtn = document.querySelector(".taskBtn");
    let submitBtn = document.querySelector(".submit");

    addBtn.addEventListener("click", () => toggleContainer(overlay));
    submitBtn.addEventListener("click", () => submitTask());
  };

  return { createOverlay, submitTask };
})();

export { displayController, overlayController };

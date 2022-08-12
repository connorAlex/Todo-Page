import { Project, projectHandler } from "./project";
import { eventHandler } from "./event";
import { Task } from "./task";

const displayController = (() => {
  const projectContainer = document.querySelector(".projectContainer");
  const taskContainer = document.querySelector(".taskContainer");

  const updateProjects = () => {
    const projects = projectHandler.getProjects();
    projectContainer.innerHTML = "";

    projects.forEach((e) => elementCreator.createButton(e));
    addSelectListeners();
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
      });
    });
  };

  return { updateProjects, updateTasks, clearInputs };
})();

const elementCreator = (() => {
  const projectContainer = document.querySelector(".projectContainer");
  const taskContainer = document.querySelector(".taskContainer");

  const createButton = (project) => {
    let btn = document.createElement("button");
    let projectName = project.getName();

    btn.innerHTML = projectName;
    btn.setAttribute("name", projectName);
    btn.classList.add("selectProjectBtn");
    projectContainer.appendChild(btn);
  };

  const createCard = (task) => {
    let card = document.createElement("div");
    let title = document.createElement("div");
    let content = document.createElement("div");

    card.classList.add("taskCard");
    title.classList.add("title");
    content.classList.add("content");
    title.innerHTML = task.getName();
    content.innerHTML = task.getDesc();

    card.appendChild(title);
    card.appendChild(content);
    taskContainer.appendChild(card);
    animateTask(card);
  };

  //allocate all of the task items into a series of divs
  const createContent = (task) => {
    //parent div
    let content = document.createElement("div");
    content.classList.add("content");

    //description
    let desc = document.createElement("div");
    desc.innerHTML = task.getDesc();
    content.appendChild(desc);

    return content
  };

  const animateTask = (element) => {
    console.log(element);

    element.addEventListener("click", (e) => {
      element.classList.toggle("active");
      let content = element.children[1];
      console.log(content);
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  }
  return { createButton, createCard };
})();

const overlayController = (() => {
  const overlay = document.querySelector(".taskInputOverlay");

  const toggleContainer = (element) => {
    if (element.style.display === "flex") {
      element.style.display = "none";
    } else {
      element.style.display = "flex";
    }
  };

  const submitTask = () => {

    let rawInputs = document.querySelectorAll(".taskInput");
    let currentProjectName = eventHandler.getCurrentProject();
    let currentProject = projectHandler.findProject(currentProjectName);
    let inputs = {
      title: rawInputs[0].value,
      description: rawInputs[1].value,
      dueDate: rawInputs[2].value,
      priority: rawInputs[3].checked ? "High" : "Low",
    };
    let newTask = Task(
      inputs.title,
      inputs.description,
      inputs.priority,
      inputs.dueDate
    );
    if (!formVerification(rawInputs)) return false;

    currentProject.addTask(newTask);
    displayController.clearInputs();
    displayController.updateTasks(currentProject);
    toggleContainer(overlay);
  };

  const formVerification = (inputArr) => {
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

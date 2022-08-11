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
    console.log(tasks);
    
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
        console.log(e.name);
        eventHandler.selectProject(e.name);
      });
    });
    console.log("addSelect fired");
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
    btn.classList.add('selectProjectBtn');

    projectContainer.appendChild(btn);
  };

  const createCard = (task) => {
    
    let card = document.createElement("div");
    let cardName = document.createElement("div");
    card.classList.add("taskCard");

    cardName.classList.add("title");
    cardName.innerHTML = task.getName();
    card.appendChild(cardName);

    taskContainer.appendChild(card);
  };
  return {createButton, createCard};
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

  //UNDER CONSTRUCTION
  //submit Task to the selected project
  const submitTask = () => {
    console.log("submitTask fired");

    let rawInputs = document.querySelectorAll(".taskInput");
    //if (!formVerification(rawInputs)) return false;

    let inputs =  {
      title: rawInputs[0].value,
      description: rawInputs[1].value,
      dueDate: rawInputs[2].value,
      priority: rawInputs[3].checked ? "High": "Low"
    };
    console.log(inputs.title);

    //get the selected project
    let currentProjectName = eventHandler.getCurrentProject();
    let currentProject = projectHandler.findProject(currentProjectName);
    
    let newTask = Task(inputs.title, inputs.description, inputs.priority, inputs.dueDate);
    console.log(newTask.getName());
    console.log(newTask.getDesc());
    console.log(newTask.getPriority());
    console.log(newTask.getDueDate());
    
    console.log(currentProject);
    currentProject.addTask(newTask);

    displayController.clearInputs();
    console.log(currentProject.getTasks());
    //something wrong here...
    displayController.updateTasks(currentProject);
    
    toggleContainer(overlay);
  };

  const formVerification = (inputArr) => {
    let output = true;
    for (let i = 0; i < inputArr.length; i++){
      if (inputArr[i].value === ""){
        output = false;
      }
    };
    return output;
  };

  const createOverlay  = () => {
    
    let addBtn = document.querySelector(".taskBtn");
    let submitBtn = document.querySelector(".submit");

    addBtn.addEventListener("click", () => toggleContainer(overlay));
    submitBtn.addEventListener("click", () => submitTask());
  };
  

  return {createOverlay, submitTask};
})();


export { displayController, overlayController };

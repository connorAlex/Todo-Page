import { projectHandler } from "./project";
import { eventHandler } from "./event";
import { elementCreator } from "./elementCreator";

const displayController = (() => {
  const projectContainer = document.querySelector(".projectContainer");
  const taskContainer = document.querySelector(".taskContainer");

  const updateProjects = () => {
    const projects = projectHandler.getProjects();
    projectContainer.innerHTML = "";

    projects.forEach((e) => {
      if (e) elementCreator.createProjectButton(e);
    });
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
    const text = document.querySelector("textarea");
    
    text.innerHTML = "";
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
    if (project){
      let btn = document.querySelector(`button[name=${project}]`);
      let oldSelected = document.querySelector(".selected");
      if (oldSelected) oldSelected.classList.remove("selected");
      
      if (project) btn.classList.toggle("selected");
    }
    
  };

  return { updateProjects, updateTasks, clearInputs, addSelectedBtnStyle };
})();



export { displayController };

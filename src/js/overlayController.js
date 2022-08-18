import { displayController } from "./display";
import { Task } from "./task";
import { eventHandler } from "./event";
import { projectHandler } from "./project";

const overlayController = (() => {
    const overlay = document.querySelector("#taskInputOverlay");
  
    const getInputs = () => {
      let inputs = document.querySelectorAll(".taskInput");
      
      if (!formVerification(inputs)) return false;
      let newTask = Task(
        inputs[0].value,
        inputs[3].value,
        inputs[2].checked ? "High" : "Low",
        inputs[1].value
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
      overlay.classList.toggle("toggle");
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
      let exitBtn = document.querySelector(".overlayExit");

      exitBtn.addEventListener("click", () => overlay.classList.toggle("toggle"));
      addBtn.addEventListener("click", () => overlay.classList.toggle("toggle"));
      submitBtn.addEventListener("click", () => submitTask());
    };
  
    return { createOverlay, submitTask };
  })();

  export {overlayController};
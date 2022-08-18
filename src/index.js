import "./style.css";
import { displayController } from "./js/display";
import { Project, projectHandler } from "./js/project";
import { Task } from "./js/task";
import { eventHandler } from "./js/event";
import { overlayController } from "./js/overlayController";

const pageLoad = (() => {
  const addProjectBtn = document.querySelector(".addProjectBtn");
  const projectInput = document.querySelector(".projectInput");
  

  addProjectBtn.addEventListener("click", (e) => {
    eventHandler.insertProject(projectInput);
  });

  // const loadDefault = (() => {
  //   const testTask = Task("Clean my room", "Clean that shit up", true, "2022-03-15");
  //   const testProject = Project("myProject");

  //   testProject.addTask(testTask);
  //   projectHandler.addProject(testProject);
    
  //   eventHandler.selectProject(testProject.getName());
  //   //projectHandler.storeProjects(testProject);
  // })();

  overlayController.createOverlay();
  projectHandler.returnSavedProjects();
  displayController.updateProjects();
})();
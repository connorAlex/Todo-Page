import "./style.css";
import { displayController, overlayController } from "./js/display";
import { Project, projectHandler } from "./js/project";
import { Task } from "./js/task";
import { eventHandler } from "./js/event";

const pageLoad = (() => {
  const addProjectBtn = document.querySelector(".addProjectBtn");
  const projectInput = document.querySelector(".projectInput");


  addProjectBtn.addEventListener("click", (e) => {
    eventHandler.insertProject(projectInput);
    
  });

  const loadDefault = (() => {
    const testTask = Task("Clean my room", "Clean that shit up");
    const testProject = Project("myProject");

    testProject.addTask(testTask);
    projectHandler.addProject(testProject);
    
    eventHandler.selectProject(testProject.getName());
  })();

  overlayController.createOverlay();
  
  displayController.updateProjects();
})();
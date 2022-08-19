import "./style.css";
import { displayController } from "./js/display";
import { projectHandler } from "./js/project";
import { eventHandler } from "./js/event";
import { overlayController } from "./js/overlayController";

const pageLoad = (() => {
  const addProjectBtn = document.querySelector(".addProjectBtn");
  const projectInput = document.querySelector(".projectInput");

  addProjectBtn.addEventListener("click", () => {
    eventHandler.insertProject(projectInput);
  });

  overlayController.createOverlay();
  projectHandler.returnSavedProjects();
  displayController.updateProjects();
})();

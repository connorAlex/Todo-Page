import "./style.css";
import { displayController } from "./js/display";
import { Project, projectHandler } from "./js/project";
import { Task } from "./js/task";
import { eventHandler } from "./js/event";

const pageLoad = (() => {
  const addProjectBtn = document.querySelector(".addProjectBtn");
  const projectInput = document.querySelector(".projectInput");
  addProjectBtn.addEventListener("click", (e) =>
    eventHandler.insertProject(projectInput)
  );

  const testTask = Task("test_task");
  const testProject = Project("test_project");

  testProject.addTask(testTask);
  projectHandler.addProject(testProject);

  displayController.updateProjects();
})();
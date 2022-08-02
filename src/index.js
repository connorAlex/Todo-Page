import './style.css';
import { Project, projectHandler } from './js/project';
import { Task } from './js/task';


const testTask = Task('test_task');
const testProject = Project('test_project');

// displayController
const displayController = (() => {
    const updateProjects = () => {

        // loop through all projects in the project handler array and display on DOM
        const projects = projectHandler.getProjects();
        const projectContainer = document.querySelector('.projectContainer');
        projectContainer.innerHTML = "";
        projects.forEach((e)=> {
            let btn = document.createElement('button');
            btn.innerHTML = e.getName();
            projectContainer.appendChild(btn);
        });
    };

    const updateTasks = (project) => {
        // loop through the selected project and display all tasks
        console.log("update Tasks");
    };

    return { updateProjects, updateTasks};
})();

displayController.updateProjects();
// Event Handler
const eventHandler = ((event) => {

})();
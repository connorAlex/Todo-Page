import './style.css';
import { Project, projectHandler } from './js/project';
import { Task } from './js/task';

const testTask = Task('test_task');
const testProject = Project('test_project');

testProject.addTask(testTask);
testProject.getTasks();

const newproject = Project('myProject');
projectHandler.addProject(newproject);

const newproject2 = Project('myProject2');
projectHandler.addProject(newproject2);

projectHandler.logProjects();

projectHandler.removeProject(newproject);
projectHandler.logProjects();

// displayController
const displayController = (() => {
    const updateProjects = () => {
        console.log("update projects");
    };

    const updateTasks = () => {
        console.log("update Tasks");
    };

    return { updateProjects, updateTasks};
})();

// Event Handler
const eventHandler = ((event) => {

})();
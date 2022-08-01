import './style.css';
import { Project } from './js/project';
import { Task } from './js/task';

const testTask = Task('test_task');
const testProject = Project('test_project');

testProject.addTask(testTask);
testProject.getTasks();

// displayController
const displayController = (() => {
    const updateProjects = () => {
        console.log("updateprojects");
    };

    const updateTasks = () => {
        console.log("update Tasks");
    };

    return { updateProjects, updateTasks};
})();

// Event Handler
const eventHandler = ((event) => {

})();
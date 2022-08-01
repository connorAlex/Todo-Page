import './style.css';
import { Project } from './js/project';
import { Task } from './js/task';

const testTask = Task('test_task');
const testProject = Project('test_project');

testProject.addTask(testTask);
testProject.displayTasks();
// displayController
const displayController = (() => {

})();

// Event Handler
const eventHandler = (() => {

})();
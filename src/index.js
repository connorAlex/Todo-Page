import './style.css';
import { Project, projectHandler } from './js/project';
import { Task } from './js/task';





// displayController
const displayController = (() => {

    const updateProjects = () => {

        // loop through all projects in the project handler array and display on DOM
        const projects = projectHandler.getProjects();
        const projectContainer = document.querySelector('.projectContainer');

        //reset Project buttons
        projectContainer.innerHTML = "";

        projects.forEach((e) => {
            let btn = document.createElement('button');
            btn.innerHTML = e.getName();

            btn.classList.add('selectProjectBtn');
            btn.setAttribute("name", e.getName());
            projectContainer.appendChild(btn);
            
        });
        addSelectListeners();
    };

    const updateTasks = (project) => {
        // loop through the selected project and display all tasks
        console.log("update tasks fired");

        const tasks = project.getTasks();
        const taskContainer = document.querySelector('.taskContainer');
        console.log(tasks);
        //reset Tasks
        taskContainer.innerHTML = "";

        // add task cards in
        if(tasks) {
            tasks.forEach((e) => {


                let card = document.createElement('div');
                card.classList.add('taskCard');
    
                let cardName = document.createElement('div');
                cardName.innerHTML = e.getName();
                cardName.classList.add('title');
                
                card.appendChild(cardName);
                taskContainer.appendChild(card);
            });
        }
        
    };

    const clearInputs = () => {
        const inputs = document.querySelectorAll("input");
        inputs.forEach((e) => {
            inputs.innerHTML = "";
        });
    };

    const addSelectListeners = () => {

        console.log("addSelectListeners fired");

        const selectProjectBtns = document.querySelectorAll(".selectProjectBtn");
        selectProjectBtns.forEach((e) => {

            e.addEventListener("click",function() {
                console.log(e.name);
                eventHandler.selectProject(e.name);
            });
        });
    };


    const addProjectBtn = document.querySelector(".addProjectBtn");
    addProjectBtn.addEventListener("click", function() {console.log("project click")});

    return {updateProjects, updateTasks, clearInputs};
})();


// Event Handler
const eventHandler = ((event) => {

    let currentProject = "";

    const getCurrentProject = () => currentProject;

    const selectProject = (project) => {
        console.log("selectProject fired");
        currentProject = project;
        const projectObject = projectHandler.findProject(project);
        displayController.updateTasks(projectObject);
    };
    
    return {getCurrentProject, selectProject};
})();


const testTask = Task('test_task');
const testProject = Project('test_project');

testProject.addTask(testTask);
projectHandler.addProject(testProject);

displayController.updateProjects();
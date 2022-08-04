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

        //reset Project buttons
        projectContainer.innerHTML = "";

        projects.forEach((e) => {
            let btn = document.createElement('button');
            btn.innerHTML = e.getName();
            projectContainer.appendChild(btn);
        });
    };

    const updateTasks = (project) => {
        // loop through the selected project and display all tasks
        console.log(project);
        const tasks = project.getTasks();
        const taskContainer = document.querySelector('.taskContainer');

        //reset Tasks
        taskContainer.innerHTML = "";

        // add task cards in
        if(tasks) {
            tasks.forEach((e) => {
                let card = document.createElement('div');
                card.classList.add('card');
    
                let cardName = document.createElement('div');
                cardName.classList.add('title');
                
                card.appendChild(cardName);
                taskContainer.appendChild(card);
            });
        }
        
    };

    return {updateProjects, updateTasks};
})();


// Event Handler
const eventHandler = ((event) => {

    // assign the currently selected project
    let currentProject = "";

    const selectProject = (project) => {
        
        currentProject = project;
        const projectObject = projectHandler.findProject(project);
        displayController.updateTasks(projectObject);
    };
    
    const selectProjectBtns = document.querySelectorAll(".selectProjectBtn");
    selectProjectBtns.forEach((e) => {
        e.addEventListener("click",function() {
            console.log(e.name);
            selectProject(e.name);
            
        });
    });


    const addProjectBtn = document.querySelector(".addProjectBtn");
    addProjectBtn.addEventListener("click", function() {console.log("project click")});
    

})(); 
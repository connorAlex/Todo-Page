import './style.css';
import { Project, projectHandler } from './js/project';
import { Task } from './js/task';


const displayController = (() => {

    const addProjectBtn = document.querySelector(".addProjectBtn");
    const projectInput = document.querySelector(".projectInput");
    addProjectBtn.addEventListener("click", function() {
        
        let project = Project(projectInput.value);
        projectHandler.addProject(project);

        updateProjects();
        clearInputs();
    });



    const updateProjects = () => {

        const projects = projectHandler.getProjects();
        const projectContainer = document.querySelector('.projectContainer');
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

        const tasks = project.getTasks();
        const taskContainer = document.querySelector('.taskContainer');
        taskContainer.innerHTML = "";

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
            e.value = "";
        });
    };

    const addSelectListeners = () => {

        const selectProjectBtns = document.querySelectorAll(".selectProjectBtn");
        selectProjectBtns.forEach((e) => {

            e.addEventListener("click",function() {
                console.log(e.name);
                eventHandler.selectProject(e.name);
            });
        });
        
    };
    

    return {updateProjects, updateTasks, clearInputs};
})();


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
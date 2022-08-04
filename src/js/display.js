import { Project, projectHandler } from './project';
import { eventHandler } from './event';

const displayController = (() => {

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

export {displayController}
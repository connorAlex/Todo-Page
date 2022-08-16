import { Project, projectHandler } from './project';
import { Task } from './task';
import { displayController } from './display';

const eventHandler = (() => {

    let currentProject = "";

    //change this to (projectHandler.findProject(currentProject);)?
    const getCurrentProject = () => currentProject;

    const selectProject = (project) => {
        currentProject = project;
        const projectObject = projectHandler.findProject(project);
        displayController.updateTasks(projectObject);
    };
    
    const insertProject = (element) => {
        if (element.value === '' || !element.value.match(/^[0-9a-z]+$/)) {return false};

        let newProject = Project(element.value);
        projectHandler.addProject(newProject);
        selectProject(newProject.getName());

        displayController.updateProjects();
        displayController.clearInputs();
        
    };

    const deleteTask = (element) => {
        let project = projectHandler.findProject(currentProject);
        let task = project.findTask(element.name);
        project.removeTask(element.name);
        displayController.updateTasks(project);
    };

    const completeTask = (element) => {
        let task = projectHandler.findProject(getCurrentProject()).findTask(element.name);
        task.toggleStatus();
    };

    return {getCurrentProject, selectProject, insertProject, completeTask, deleteTask};
})();

export {eventHandler};
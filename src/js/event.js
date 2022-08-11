import { Project, projectHandler } from './project';
import { displayController } from './display';

const eventHandler = (() => {

    let currentProject = "";

    const getCurrentProject = () => currentProject;

    const selectProject = (project) => {
        currentProject = project;
        const projectObject = projectHandler.findProject(project);
        displayController.updateTasks(projectObject);
    };
    
    const insertProject = (element) => {
        if (element.value === '') {return false};

        let newProject = Project(element.value);
        projectHandler.addProject(newProject);
        
        displayController.updateProjects();
        displayController.clearInputs();
        
    };

    
    return {getCurrentProject, selectProject, insertProject};
})();

export {eventHandler};
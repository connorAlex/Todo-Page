import { Project, projectHandler } from './project';
import { displayController } from './display';

const eventHandler = (() => {

    let currentProject = "";

    

    const getCurrentProject = () => currentProject;

    const selectProject = (project) => {
        console.log("selectProject fired");
        currentProject = project;
        const projectObject = projectHandler.findProject(project);
        displayController.updateTasks(projectObject);
    };
    
    const insertProject = (element) => {
        console.log(element);
        let newProject = Project(element.value);
        projectHandler.addProject(newProject);
        
        displayController.updateProjects();
        console.log("made it here");
        displayController.clearInputs();
        
    };

    

    return {getCurrentProject, selectProject, insertProject};
})();

export {eventHandler};
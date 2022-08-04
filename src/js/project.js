

const Project = (name) => {

    //contains all the tasks within a project
    let projectArray = [];

    const getName = () => name;

    const getTasks = () => {
        return projectArray;
    }

    const addTask = (task) => {
        projectArray.push(task);
    }

    const removeTask = (task) => {
        const index = projectArray.indexOf(task);
        projectArray.splice(index, 1);
    }

    return {addTask, getTasks, removeTask, getName};
}

const projectHandler = (() => {
    
    //contains all projects
    let projectList = [];
    
    //add 1 default project
    let defaultProject = Project("myProject");
    projectList.push(defaultProject);


    const addProject = (project) => {
        projectList.push(project);
    };

    const removeProject = (project) => {
        const index = projectList.indexOf(project);
        projectList.splice(index, 1);
    };

    const getProjects = () => {
        return projectList;
    };

    const findProject = (name) => {
        if (projectList.includes(name)) {
            return projectList.indexOf(name);
        } else {
            return false;
        }
        
        
    }

    return {addProject, removeProject, getProjects, findProject};
})();

export {Project, projectHandler};
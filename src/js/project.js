

const Project = (name) => {

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
    
    let projectList = [];
    
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

    const findProject = (projectName) => {

        let obj = projectList.find(e => e.getName() === projectName);
        return obj;
    }

    return {addProject, removeProject, getProjects, findProject};
})();

export {Project, projectHandler};
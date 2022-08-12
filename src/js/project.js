

const Project = (name) => {

    let projectArray = [];

    const getName = () => name;

    const getTasks = () => {
        return projectArray;
    }

    const addTask = (task) => {
        projectArray.push(task);
    };

    const getTaskIndex = (nameString) => {
        let obj = projectArray.find(e => e.getName() === nameString);
        let index = projectArray.indexOf(obj);
        return index;
    }

    const findTask = (nameString) => {
        let obj = projectArray.find(e => e.getName() === nameString);
        return obj;
    };

    const removeTask = (task) => {
        console.log("about to remove: "  + task);
        let index = getTaskIndex(task);
        console.log(index);
        projectArray.splice(index, 1);
    }

    return {addTask, getTasks, removeTask, getName, findTask};
}

const projectHandler = (() => {
    
    let projectList = [];
    
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
const Project = (name) => {

    let projectArray = [];

    const getTasks = () => {
        projectArray.forEach((e) => console.log(e.getName()));
    }

    const addTask = (task) => {
        projectArray.push(task);
    }

    const removeTask = (task) => {
        const index = projectArray.indexOf(task);
        projectArray.splice(index, 1);
    }

    const getName = () => name;

    return {addTask, getTasks, removeTask, getName};
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

    const logProjects = () => {
        console.log("logProjects started");
        projectList.forEach((e)=> console.log(e.getName()))
    }; 


    return {addProject, removeProject, logProjects};
})();

export {Project, projectHandler};
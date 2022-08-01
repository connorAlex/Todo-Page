const Project = (name) => {

    //init array
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

    return {addTask, getTasks, removeTask};
}

export {Project};
const Project = (name) => {

    //init array
    let projectArray = [];

    const displayTasks = () => {
        projectArray.forEach((e) => console.log(e.getName()));
    }

    const addTask = (task) => {
        projectArray.push(task);
    }

    return {addTask, displayTasks};
}

export {Project};
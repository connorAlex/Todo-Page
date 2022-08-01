const createProject = (name) => {

    //init array
    let projectArray = [];

    const displayTasks = () => {
        projectArray.forEach((e) => console.log(e));
    }

    const addTask = (task) => {
        projectArray.push(task);
    }

    return {addTask};
}

export {createProject};
import './style.css';

// factory functions

// tasks
const createTask = (name, desc, priority, dueDate) => {
    
    const getName = () => name;
    const getDesc = () => desc;
    const getPriority = () => priority;
    const getDueDate = () => dueDate;

    return {getName, getDesc, getPriority, getDueDate};
};


// Projects 
const createProject = (name) => {

    //init array
    let projectArray = [];

    const displayTasks = () => {
        projectArray.forEach((e) => console.log(e));
    }

    return {displayProject};
}
// modules

// displayController
const displayController = (() => {

})();

// Event Handler
const eventHandler = (() => {

})();
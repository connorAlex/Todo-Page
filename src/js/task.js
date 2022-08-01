// tasks
const createTask = (name, desc, priority, dueDate) => {
    
    const getName = () => name;
    const getDesc = () => desc;
    const getPriority = () => priority;
    const getDueDate = () => dueDate;

    return {getName, getDesc, getPriority, getDueDate};
};

export {createTask};
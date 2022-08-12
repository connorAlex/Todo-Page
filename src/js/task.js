import {parse, isPast} from 'date-fns';

const Task = (name, desc, priority, dueDate) => {
    
    let status = false;
    //convert html dueDate to a date object
    const date = parse(dueDate, 'yyyy-mm-dd', new Date());
    
    const getName = () => name;
    const getDesc = () => desc;
    const getPriority = () => priority;
    const getDueDate = () => date;
    const getStatus = () => status;
    const toggleStatus = () =>  {
        status = !status;
        return status
    }


    // checks if dueDate is before current date
    const isPastDue = () => {
        if (isPast(date) === true){
            return true;
        }
        return false;
    };

    return {getName, getDesc, getPriority, getDueDate, toggleStatus, getStatus};
};

export {Task};
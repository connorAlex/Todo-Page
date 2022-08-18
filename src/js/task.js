import {format, parse, isPast} from 'date-fns';

//use a default variable to set the status to false, then you can save the status
const Task = (name, desc, priority, dueDate, newstatus = false) => {
    
    let status = newstatus;
    // let status = false;
    //convert html dueDate to a date object
    const date = format(parse(dueDate, 'yyyy-mm-dd', new Date()),"MM/dd/yyyy");
    
    const getName = () => name;
    const getDesc = () => desc;
    const getPriority = () => priority;
    const getDueDate = () => dueDate;
    const getStatus = () => status;
    const toggleStatus = () =>  {
        status = !status;
        return status
    }


    // checks if dueDate is before current date
    // const isPastDue = () => {
    //     if (isPast(date) === true){
    //         return true;
    //     }
    //     return false;
    // };

    return {getName, getDesc, getPriority, getDueDate, toggleStatus, getStatus};
};

export {Task};
import { Task } from "./task";

const Project = (name) => {
  let projectArray = [];

  const getName = () => name;

  const getTasks = () => projectArray;

  const addTask = (task) => {
    projectArray.push(task);
  };

  const getTaskIndex = (nameString) => {
    let obj = projectArray.find((e) => e.getName() === nameString);
    let index = projectArray.indexOf(obj);
    return index;
  };

  const findTask = (nameString) => {
    let obj = projectArray.find((e) => e.getName() === nameString);
    return obj;
  };

  const removeTask = (task) => {
    let index = getTaskIndex(task);
    projectArray.splice(index, 1);
  };

  const saveTasks = () => {
    let taskJson = [];
    projectArray.forEach((e) => {
      let taskObject = {
        name: e.getName(),
        desc: e.getDesc(),
        priority: e.getPriority(),
        dueDate: e.getDueDate(),
        status: e.getStatus(),
      };
      taskJson.push(taskObject);
    });

    return taskJson;
  };

  return { addTask, getTasks, removeTask, getName, findTask, saveTasks };
};

const projectHandler = (() => {
  let projectList = [];

  const addProject = (project) => {
    projectList.push(project);
    storeProjects(project);
  };

  const removeProject = (project) => {
    const index = projectList.indexOf(project);
    projectList.splice(index, 1);
  };

  const getProjects = () => {
    return projectList;
  };

  const findProject = (projectName) => {
    let obj = projectList.find((e) => e.getName() === projectName);
    return obj;
  };

  const saveProject = (project) => {
    let projectObject = {
      name: project.getName(),
      tasks: project.saveTasks(),
    };
    return projectObject;
  };

  const storeProjects = (project) => {
    let projectObject = saveProject(project);
    localStorage.setItem(projectObject.name, JSON.stringify(projectObject));
  };

  const returnSavedProjects = () => {
    for (let i = 0; i < localStorage.length; i++) {
      let projectObject = JSON.parse(localStorage.getItem(localStorage.key(i)));
      let newProject = Project(projectObject.name);

      projectObject.tasks.forEach((e) => {
        let newTask = Task(e.name, e.desc, e.priority, e.dueDate, e.status);
        newProject.addTask(newTask);
      });

      addProject(newProject);
    }
  };

  return {
    addProject,
    removeProject,
    getProjects,
    findProject,
    storeProjects,
    returnSavedProjects,
  };
})();

export { Project, projectHandler };

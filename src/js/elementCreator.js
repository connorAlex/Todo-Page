import { eventHandler } from "./event";

const elementCreator = (() => {
  const projectContainer = document.querySelector(".projectContainer");
  const taskContainer = document.querySelector(".taskContainer");

  const createProjectButton = (project) => {
    let btn = document.createElement("button");
    let projectName = project.getName();

    btn.innerHTML = projectName;
    btn.setAttribute("name", projectName);
    btn.classList.add("selectProjectBtn");
    projectContainer.appendChild(btn);
  };

  //create element
  const crel = (type, classAdd, text = "") => {
    let output = document.createElement(type);
    output.classList.add(classAdd);
    output.innerHTML = text;

    return output;
  };

  const createCheck = (task) => {
    let check = document.createElement("input");
    // adding the "completed" styling

    check.type = "checkbox";
    check.name = task.getName();

    check.addEventListener("click", function (e) {
      e.stopPropagation();
      strikeTask(check);
    });
    return check;
  };

  const createDeleteBtn = (name) => {
    let deleteBtn = crel("button", "deleteBtn");
    deleteBtn.name = name;
    deleteBtn.innerHTML = "x";

    deleteBtn.addEventListener("click", function (e) {
      e.stopPropagation();
      eventHandler.deleteTask(deleteBtn);
    });

    return deleteBtn;
  };

  const createDueDate = (dueDate) => {
    let date = crel("div", "dueDate");
    date.innerHTML = dueDate;
    return date;
  };

  const createCardInfo = (task) => {
    let content = crel("div", "content");
    let subject = crel("div", "subject");
    let detail = crel("div", "detail");
    let title = crel("p", "title", task.getName());
    let priority = crel("p", "priority", task.getPriority() ? "!" : "");
    let check = createCheck(task);

    detail.appendChild(priority);
    detail.appendChild(createDueDate(task.getDueDate()));
    detail.appendChild(createDeleteBtn(task.getName()));

    if (task.getStatus() === true) {
      subject.classList.add("complete");
      check.checked = true;
    }

    let children = [check, title, detail];

    children.forEach((e) => subject.appendChild(e));
    content.innerHTML += task.getDesc();

    return { subject, content };
  };

  const createCard = (task) => {
    let card = crel("div", "taskCard");
    let info = createCardInfo(task);

    card.appendChild(info.subject);
    card.appendChild(info.content);

    taskContainer.appendChild(card);
    animateTask(card);
  };

  const animateTask = (element) => {
    element.addEventListener("click", () => {
      element.classList.toggle("active");
      let content = element.children[1];
      if (content.style.maxHeight) {
        content.style.maxHeight = null;
      } else {
        content.style.maxHeight = content.scrollHeight + "px";
      }
    });
  };

  const strikeTask = (checkbox) => {
    eventHandler.completeTask(checkbox);
    checkbox.parentElement.classList.toggle("complete");
  };

  return { createProjectButton, createCard };
})();

export { elementCreator };

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
  
    //create element\
    const crel = (type, classAdd) => {
      let output = document.createElement(type);
      output.classList.add(classAdd);
  
      return output;
    };
  
    const createCheck = (task) => {
      let check = document.createElement("input");
      // adding the "completed" styling
      if (task.getStatus() === true) {
        title.classList.add("complete");
        check.checked = true;
      };
      check.type = "checkbox";
      check.name = task.getName();
  
      check.addEventListener("click", function(e) {
        e.stopPropagation();
        strikeTask(check)
      });
      return check;
    };
  
    const createDeleteBtn = (name) => {
      let deleteBtn = crel("button","deleteBtn");
      deleteBtn.name = name;
      deleteBtn.innerHTML = "x";
  
      deleteBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        eventHandler.deleteTask(deleteBtn);
        
      });
  
      return deleteBtn;
    };
    
    const createTitle = (name) => {
      let title = document.createElement("p");
      title.innerHTML += name;
  
      return title;
    };
  
    const createCardInfo = (task) => {
      let content = crel("div","content");
      let subject = crel("div","subject");
  
      let children = [
        createCheck(task),
        createTitle(task.getName()),
        createDeleteBtn(task.getName())
      ];
  
      children.forEach((e) => subject.appendChild(e));
      content.innerHTML += task.getDesc();
  
      return {subject,content}
    };
     
    const createCard = (task) => {
      let card = crel("div","taskCard");
      let info = createCardInfo(task);
  
      card.appendChild(info.subject);
      card.appendChild(info.content);
      
      taskContainer.appendChild(card);
      animateTask(card);
  
    };
  
    const animateTask = (element) => {
      element.addEventListener("click", (e) => {
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

  export {elementCreator};
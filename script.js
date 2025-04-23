const inputvalue = document.getElementById("taskInput");
const listcontainer = document.getElementById("list-container");

function addTask(){
    if(inputvalue.value.trim() === "") {
        alert("Please enter a task.");
        return;
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputvalue.value;
        listcontainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputvalue.value = "";
    saveTask();
}
listcontainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
    }
    else if(e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
    }
    saveTask();
}, false); 

function saveTask(){
    localStorage.setItem("task", listcontainer.innerHTML);
}
function showTask(){
    listcontainer.innerHTML = localStorage.getItem("task");
}
showTask();
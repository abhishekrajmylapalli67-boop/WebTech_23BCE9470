function addTask(){
const text=document.getElementById("taskInput").value;
if(!text)return;
const task=document.createElement("div");
task.className="task";
task.draggable=true;
task.id="task"+Date.now();
task.innerHTML=text+"<br>"+new Date().toLocaleDateString();
task.ondragstart=e=>e.dataTransfer.setData("id",task.id);
document.querySelector(".column").appendChild(task);
document.getElementById("taskInput").value="";
}

function allow(e){
e.preventDefault();
}

function drop(e){
e.preventDefault();
const id=e.dataTransfer.getData("id");
const task=document.getElementById(id);
e.currentTarget.appendChild(task);
if(e.currentTarget.classList.contains("complete")){
task.style.background="#9cff9c";
document.getElementById("msg").textContent="Task Completed Successfully";
}
}
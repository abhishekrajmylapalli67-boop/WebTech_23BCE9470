let students=[];

fetch("students.json")
.then(res=>res.json())
.then(data=>{
    students=data;
    render();
});

const container=document.getElementById("students");

function render(){
    container.innerHTML="";
    students.forEach((s,i)=>{
        const div=document.createElement("div");
        div.className="card";
        div.innerHTML=`
            <h3>${s.name}</h3>
            <p>${s.course}</p>
            <p>${s.marks}</p>
            <button onclick="remove(${i})">Delete</button>
        `;
        container.appendChild(div);
    });
}

document.getElementById("studentForm").addEventListener("submit",e=>{
    e.preventDefault();
    students.push({
        id:sid.value,
        name:sname.value,
        course:course.value,
        marks:marks.value
    });
    render();
    e.target.reset();
});

function remove(i){
    students.splice(i,1);
    render();
}
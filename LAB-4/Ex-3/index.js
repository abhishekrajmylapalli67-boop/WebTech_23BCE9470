let students = [];
const form = document.getElementById("studentForm");
const tableBody = document.querySelector("#table tbody");
const message = document.getElementById("message");

function render() {
    tableBody.innerHTML = "";
    students.forEach((s, index) => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${s.id}</td>
            <td>${s.name}</td>
            <td>${s.dept}</td>
            <td>${s.marks}</td>
            <td>
                <button onclick="editStudent(${index})">Edit</button>
                <button onclick="deleteStudent(${index})">Delete</button>
            </td>`;
        tableBody.appendChild(row);
    });
}

form.addEventListener("submit", e => {
    e.preventDefault();
    const student = {
        id: id.value,
        name: name.value,
        dept: dept.value,
        marks: marks.value
    };
    students.push(student);
    render();
    message.textContent = "Student Added";
    form.reset();
});

function deleteStudent(index) {
    students.splice(index,1);
    render();
    message.textContent = "Student Deleted";
}

function editStudent(index) {
    const s = students[index];
    id.value = s.id;
    name.value = s.name;
    dept.value = s.dept;
    marks.value = s.marks;
    students.splice(index,1);
    render();
    message.textContent = "Student Updated";
}
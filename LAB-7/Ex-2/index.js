const student = {
id: 101,
name: "Priya",
department: "CSE",
marks: 92
};

const { id, name, department, marks } = student;

const grade = marks > 90 ? "A" : "B";

const updatedStudent = {
...student,
grade: grade
};

document.getElementById("data").innerText =
`${id} ${name} ${department} ${marks}

${JSON.stringify(updatedStudent)}`;
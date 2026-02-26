let xmlDoc;
const table = document.getElementById("empTable");
const msg = document.getElementById("msg");

fetch("employees.xml")
.then(res => res.text())
.then(data => {
    const parser = new DOMParser();
    xmlDoc = parser.parseFromString(data, "application/xml");
    render();
});

function render() {
    table.innerHTML = "";
    const employees = xmlDoc.getElementsByTagName("employee");
    for (let emp of employees) {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${emp.getElementsByTagName("id")[0].textContent}</td>
            <td>${emp.getElementsByTagName("name")[0].textContent}</td>
            <td>${emp.getElementsByTagName("department")[0].textContent}</td>
            <td>${emp.getElementsByTagName("salary")[0].textContent}</td>
            <td><button onclick="removeEmp(this)">Delete</button></td>
        `;
        table.appendChild(row);
    }
}

document.getElementById("empForm").addEventListener("submit", e => {
    e.preventDefault();
    const emp = xmlDoc.createElement("employee");

    ["empId","empName","empDept","empSalary"].forEach((id,i) => {
        const node = xmlDoc.createElement(["id","name","department","salary"][i]);
        node.textContent = document.getElementById(id).value;
        emp.appendChild(node);
    });

    xmlDoc.documentElement.appendChild(emp);
    render();
    msg.textContent = "Employee saved";
    e.target.reset();
});

function removeEmp(btn) {
    const index = btn.closest("tr").rowIndex - 1;
    xmlDoc.documentElement.removeChild(xmlDoc.getElementsByTagName("employee")[index]);
    render();
    msg.textContent = "Employee removed";
}
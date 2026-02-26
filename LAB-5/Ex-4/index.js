let inventory=[];

fetch("inventory.json")
.then(res=>res.json())
.then(data=>{
    inventory=data;
    render();
});

const tbody=document.getElementById("inventory");
const totalDiv=document.getElementById("total");

function render(filter=""){
    tbody.innerHTML="";
    let total=0;

    inventory
    .filter(p=>p.category.toLowerCase().includes(filter.toLowerCase()))
    .forEach((p,i)=>{
        total+=p.price*p.stock;
        const row=document.createElement("tr");
        row.innerHTML=`
            <td>${p.name}</td>
            <td>${p.category}</td>
            <td>${p.price}</td>
            <td class="${p.stock<5?'low':''}">${p.stock}</td>
            <td><button onclick="del(${i})">Delete</button></td>
        `;
        tbody.appendChild(row);
    });

    totalDiv.textContent="Total Inventory Value: ₹"+total;
}

document.getElementById("productForm").addEventListener("submit",e=>{
    e.preventDefault();
    inventory.push({
        id:pid.value,
        name:pname.value,
        category:cat.value,
        price:Number(price.value),
        stock:Number(stock.value)
    });
    render();
    e.target.reset();
});

document.getElementById("search").addEventListener("input",e=>{
    render(e.target.value);
});

function del(i){
    inventory.splice(i,1);
    render();
}
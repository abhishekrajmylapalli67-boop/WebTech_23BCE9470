let users=JSON.parse(localStorage.getItem("users"))||[];
const tbody=document.getElementById("users");
const msg=document.getElementById("msg");

function render(){
tbody.innerHTML="";
users.forEach((u,i)=>{
const row=document.createElement("tr");
row.innerHTML=`
<td>${u.name}</td>
<td>${u.email}</td>
<td>${u.mobile}</td>
<td><button onclick="removeUser(${i})">Delete</button></td>
`;
tbody.appendChild(row);
});
localStorage.setItem("users",JSON.stringify(users));
}

document.getElementById("form").addEventListener("submit",e=>{
e.preventDefault();
if(mobile.value.length!==10||password.value.length<6){
msg.textContent="Invalid mobile or password";
return;
}
if(users.some(u=>u.email===email.value)){
msg.textContent="Email already exists";
return;
}
users.push({name:name.value,email:email.value,mobile:mobile.value,password:password.value});
render();
e.target.reset();
msg.textContent="User Registered";
});

function removeUser(i){
users.splice(i,1);
render();
}

function clearAll(){
users=[];
render();
localStorage.clear();
}
render();
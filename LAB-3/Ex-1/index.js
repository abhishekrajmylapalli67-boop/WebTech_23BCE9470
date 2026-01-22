const f=document.getElementById("regForm")
const role=document.getElementById("role")
const skillsBox=document.getElementById("skillsBox")
const msg=document.getElementById("msg")

role.onchange=()=>skillsBox.style.display=role.value==="student"?"block":"none"

function emailOk(e){
return e.endsWith("@edu.com")||e.endsWith("@school.com")||e.endsWith("@admin.org")
}

function passOk(p){
if(role.value==="admin") return p.length>=10&&/[A-Z]/.test(p)&&/[0-9]/.test(p)
if(role.value==="teacher") return p.length>=7
return p.length>=5
}

f.onsubmit=e=>{
e.preventDefault()
msg.textContent=""
let ok=true
document.querySelectorAll("input,select").forEach(i=>i.classList.remove("invalid"))

if(!emailOk(email.value)){email.classList.add("invalid");ok=false}
if(!passOk(pass.value)){pass.classList.add("invalid");ok=false}
if(pass.value!==cpass.value){cpass.classList.add("invalid");ok=false}
if(!role.value){role.classList.add("invalid");ok=false}

if(ok){msg.textContent="Registration Complete";msg.style.color="green"}
else{msg.textContent="Fix highlighted fields";msg.style.color="red"}
}

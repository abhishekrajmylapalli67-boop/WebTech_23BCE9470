const qs=[
{id:1,t:"text",req:true,max:20,label:"Name"},
{id:2,t:"radio",req:true,label:"Gender",opt:["M","F"]},
{id:3,t:"check",req:true,min:1,label:"Skills",opt:["JS","CSS","HTML"]}
]

const f=document.getElementById("survey")

qs.forEach(q=>{
let d=document.createElement("div")
d.className="q"
d.innerHTML=`<strong>${q.label}</strong><br>`
if(q.t==="text")d.innerHTML+=`<input data-id="${q.id}">`
if(q.t==="radio")q.opt.forEach(o=>d.innerHTML+=`<label><input type="radio" name="${q.id}" value="${o}">${o}</label>`)
if(q.t==="check")q.opt.forEach(o=>d.innerHTML+=`<label><input type="checkbox" data-id="${q.id}">${o}</label>`)
d.innerHTML+=`<div class="error"></div>`
f.appendChild(d)
})

function check(){
let ok=true
qs.forEach(q=>{
let box=document.querySelector(`[data-id="${q.id}"]`)
let err=box?.parentElement.querySelector(".error")
err.textContent=""
if(q.t==="text"&&(box.value.length===0||box.value.length>q.max)){err.textContent="Invalid";ok=false}
if(q.t==="radio"&&!document.querySelector(`input[name="${q.id}"]:checked`)){err.textContent="Select one";ok=false}
if(q.t==="check"&&document.querySelectorAll(`[data-id="${q.id}"]:checked`).length<q.min){err.textContent="Pick at least one";ok=false}
})
if(ok)alert("Survey Submitted")
}

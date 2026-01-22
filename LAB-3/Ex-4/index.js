let logs=[]
let clicks=0

function record(type){
logs.push({type,time:new Date().toLocaleTimeString()})
document.getElementById("log").innerHTML=logs.map(l=>`<li>${l.time} - ${l.type}</li>`).join("")
}

document.addEventListener("click",e=>{
clicks++
record("click")
if(clicks>10)document.getElementById("warn").textContent="Excessive clicking detected"
},true)

document.addEventListener("keydown",()=>record("key"))
document.addEventListener("focusin",()=>record("focus"))

function reset(){
logs=[]
clicks=0
document.getElementById("log").innerHTML=""
document.getElementById("warn").textContent=""
}

function exportLog(){
alert(logs.map(l=>`${l.time} ${l.type}`).join("\n"))
}

let i=0
const steps=document.querySelectorAll(".step")
const fill=document.getElementById("fill")
const data=[]

function show(){
steps.forEach(s=>s.style.display="none")
steps[i].style.display="block"
fill.style.width=((i+1)/4*100)+"%"
}

function next(){
let inp=steps[i].querySelector("input")
if(inp.value==="")return
data[i]=inp.value
if(i<3){i++;show()}else alert("Completed")
}

show()

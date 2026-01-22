let items=[
{name:"Notebook",price:120,qty:1,cat:"study"},
{name:"Mouse",price:600,qty:1,cat:"tech"}
]

let coupon=0

function draw(){
let sum=0
document.getElementById("cart").innerHTML=items.map((i,x)=>{
let sub=i.price*i.qty
if(i.qty>=3)sub*=0.9
if(i.cat==="study")sub*=0.95
sum+=sub
return `<div class="item">${i.name} x${i.qty}<span>₹${sub.toFixed(0)}</span>
<button onclick="items[${x}].qty++;draw()">+</button>
<button onclick="items[${x}].qty--;if(items[${x}].qty<1)items.splice(${x},1);draw()">-</button></div>`
}).join("")
sum*=1-coupon
document.getElementById("total").textContent="Payable ₹"+sum.toFixed(0)
}

function apply(){
let c=document.getElementById("code").value.toUpperCase()
coupon=c.startsWith("SAVE")?0.1:0
draw()
}

draw()

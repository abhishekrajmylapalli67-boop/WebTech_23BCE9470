function run(){
document.getElementById("output").textContent=
`use vehicles
show dbs

db.createCollection("two_wheelers",{capped:true,size:500000})
db.createCollection("four_wheelers")

db.two_wheelers.insertMany([
{bike_name:"R15",model:"gear",category:"150cc",colors_available:["red","black"],manufacturer:"Yamaha",performance:9,timestamp:new Date("2022-05-01"),price:180000},
{bike_name:"Activa",model:"gearless",category:"125cc",colors_available:["blue","white"],manufacturer:"Honda",performance:8,timestamp:new Date("2021-03-01"),price:90000},
{bike_name:"Pulsar",model:"gear",category:"200cc",colors_available:["black"],manufacturer:"Bajaj",performance:8,timestamp:new Date("2020-02-01"),price:150000},
{bike_name:"Apache",model:"gear",category:"160cc",colors_available:["grey"],manufacturer:"TVS",performance:7,timestamp:new Date("2019-04-01"),price:140000},
{bike_name:"FZ",model:"gear",category:"150cc",colors_available:["green"],manufacturer:"Yamaha",performance:8,timestamp:new Date("2023-01-01"),price:160000}
])

db.four_wheelers.insertMany([
{vehicle_name:"Swift",model:"own",category:"car",variants:["vxi","zxi","diesel"],manufacturer:"Maruti",performance:7,timestamp:new Date("2022-01-01"),price:800000},
{vehicle_name:"Innova",model:"commercial",category:"car",variants:["diesel"],manufacturer:"Toyota",performance:9,timestamp:new Date("2021-01-01"),price:2000000},
{vehicle_name:"Eicher",model:"commercial",category:"heavy truck",variants:["diesel"],manufacturer:"Eicher",performance:6,timestamp:new Date("2018-01-01"),price:3000000},
{vehicle_name:"Volvo Bus",model:"commercial",category:"bus",variants:["diesel"],manufacturer:"Volvo",performance:8,timestamp:new Date("2020-01-01"),price:5000000},
{vehicle_name:"Tata Ace",model:"commercial",category:"mini truck",variants:["petrol"],manufacturer:"Tata",performance:6,timestamp:new Date("2019-01-01"),price:400000}
])

db.two_wheelers.find()
db.four_wheelers.find()

db.two_wheelers.find({},{"bike_name":1,"price":1})
db.four_wheelers.find({},{"vehicle_name":1,"price":1})

db.two_wheelers.find({manufacturer:"Yamaha"})
db.four_wheelers.find({variants:"diesel"})
db.two_wheelers.find({performance:{$gt:5}},{"bike_name":1,"category":1,"manufacturer":1})
db.four_wheelers.find({performance:{$gt:5}},{"vehicle_name":1,"category":1,"manufacturer":1})
`;
}
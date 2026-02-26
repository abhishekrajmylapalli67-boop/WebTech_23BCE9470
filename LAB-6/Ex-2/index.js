function display(){
document.getElementById("screen").textContent=
`use animal
show dbs

db.createCollection("wild_animals",{capped:true,size:500000})
db.createCollection("domestic_animals")

db.wild_animals.insertMany([
{animal_name:"Lion",nature:"harm",favorite_foods:["meat","deer"],care_taker_name:"Ravi",life_span:12,timestamp:new Date(),expenses:50000},
{animal_name:"Tiger",nature:"harm",favorite_foods:["meat"],care_taker_name:"Arun",life_span:15,timestamp:new Date(),expenses:60000},
{animal_name:"Elephant",nature:"harmless",favorite_foods:["grass"],care_taker_name:"Suresh",life_span:40,timestamp:new Date(),expenses:70000},
{animal_name:"Zebra",nature:"harmless",favorite_foods:["grass"],care_taker_name:"Mani",life_span:20,timestamp:new Date(),expenses:30000},
{animal_name:"Bear",nature:"harm",favorite_foods:["fish"],care_taker_name:"Ravi",life_span:18,timestamp:new Date(),expenses:45000}
])

db.domestic_animals.insertMany([
{animal_name:"Dog",gender:"male",favorite_foods:["meat"],animal_petname:"Tommy",life_span:10,timestamp:new Date(),expenses:10000},
{animal_name:"Cat",gender:"female",favorite_foods:["fish"],animal_petname:"Kitty",life_span:8,timestamp:new Date(),expenses:8000},
{animal_name:"Cow",gender:"female",favorite_foods:["grass"],animal_petname:"Lakshmi",life_span:15,timestamp:new Date(),expenses:15000},
{animal_name:"Goat",gender:"male",favorite_foods:["leaves"],animal_petname:"Raja",life_span:12,timestamp:new Date(),expenses:9000},
{animal_name:"Horse",gender:"male",favorite_foods:["grass"],animal_petname:"Rocket",life_span:20,timestamp:new Date(),expenses:20000}
])

db.wild_animals.find()
db.domestic_animals.find()

db.wild_animals.find({},{"animal_name":1,"expenses":1})
db.domestic_animals.find({},{"animal_name":1,"expenses":1})

db.domestic_animals.find({life_span:10})
db.wild_animals.find({care_taker_name:"Ravi"})
db.wild_animals.find({life_span:{$gt:5}},{"animal_name":1,"favorite_foods":1,"expenses":1})
db.domestic_animals.find({life_span:{$gt:5}},{"animal_name":1,"favorite_foods":1,"expenses":1})
`;
}
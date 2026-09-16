let bins={
Plastic:[],
Organic:[],
Paper:[],
Glass:[],
Metal:[],
Other:[]
};

let recycling={};

// Greedy Automatic Classification
function autoClassify(item){

item=item.toLowerCase();

if(item.includes("bottle") || item.includes("plastic"))
return "Plastic";

if(item.includes("banana") || item.includes("food"))
return "Organic";

if(item.includes("paper") || item.includes("newspaper"))
return "Paper";

if(item.includes("glass"))
return "Glass";

if(item.includes("can") || item.includes("metal"))
return "Metal";

return "Other";
}

function addWaste(){





let item=document.getElementById("item").value;

let category=autoClassify(item);

bins[category].push(item);

if(recycling[category])
recycling[category]++;
else
recycling[category]=1;

displayBins();
displayRecycling();

}

// Display waste bins
function displayBins(){

let output="";

for(let key in bins){
output+=key+" : "+bins[key].join(", ")+"<br>";
}

document.getElementById("bins").innerHTML=output;

}

// Hash Map Recycling Tracker
function displayRecycling(){

let output="";

for(let key in recycling){
output+=key+" : "+recycling[key]+" items<br>";
}

document.getElementById("recycling").innerHTML=output;

}

// IoT Smart Bin Sensors
function updateSensors(){

let sensors={
"Bin A":Math.floor(Math.random()*100),
"Bin B":Math.floor(Math.random()*100),
"Bin C":Math.floor(Math.random()*100)
};





let output="";

for(let s in sensors){
output+=s+" : "+sensors[s]+"% full<br>";
}

document.getElementById("iot").innerHTML=output;

}

// Heap Priority Scheduling
function showPriority(){

let binsFill=[
["BinA",70],
["BinB",90],
["BinC",40],
["BinD",85]
];

binsFill.sort((a,b)=>b[1]-a[1]);

let output="";

binsFill.forEach(bin=>{
output+=bin[0]+" : "+bin[1]+"%<br>";
});

document.getElementById("priority").innerHTML=output;

}

// Dijkstra Route Optimization (simplified output)
function showRoutes(){

let routes={
Depot:0,
A:3,
B:2,
C:4,
D:5,
E:6
};

let output="";

for(let key in routes){
output+=key+" : "+routes[key]+" km<br>";
}






document.getElementById("routes").innerHTML=output;

}

// Data Analytics
function showAnalytics(){

let total=0;

for(let key in recycling)
total+=recycling[key];

let output="Total Waste : "+total+" items<br>";

for(let key in recycling){

let percent=(recycling[key]/total*100).toFixed(1);

output+=key+" : "+percent+"%<br>";

}

document.getElementById("analytics").innerHTML=output;

}

// Circular Economy Processing
function circularEconomy(){

let output="";

for(let key in recycling){

if(key==="Plastic" || key==="Metal" || key==="Glass")
output+=key+" → Sent to Recycling Factory ♻<br>";

else if(key==="Organic")
output+=key+" → Converted to Compost 🌱<br>";

else
output+=key+" → Waste Processing Unit<br>";

}

document.getElementById("circular").innerHTML=output;

}
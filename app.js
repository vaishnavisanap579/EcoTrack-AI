let chart;

function calculate() {

let car = Number(document.getElementById("car").value);

let electricity = Number(document.getElementById("electricity").value);

let flights = Number(document.getElementById("flights").value);

let food = document.getElementById("food").value.toLowerCase();

if(
document.getElementById("car").value==="" ||
document.getElementById("electricity").value==="" ||
document.getElementById("flights").value==="" ||
food===""){
alert("Please fill all fields");
return;
}

let transport = car*0.21;

let energy = electricity*0.82;

let flightEmission = flights*90;

let foodEmission = food==="non-veg"?50:20;

let carbon =
transport+
energy+
flightEmission+
foodEmission;

let category;

let recommendation;

if(carbon<100){
category="Low";
recommendation="Excellent! Continue your sustainable lifestyle.";
}
else if(carbon<300){
category="Medium";
recommendation="Reduce electricity use and travel emissions.";
}
else{
category="High";
recommendation="Significantly reduce flights and fuel consumption.";
}

document.getElementById("output").innerHTML=
`
<h3>${carbon.toFixed(2)} kg CO₂ / month</h3>
<p>${recommendation}</p>
`;

let ecoScore=Math.max(0,100-Math.floor(carbon/5));

document.getElementById("ecoScore").innerHTML=ecoScore;

document.getElementById("monthlyCO2").innerHTML=
carbon.toFixed(0);

document.getElementById("annualCO2").innerHTML=
(carbon*12/1000).toFixed(2)+" tons";

document.getElementById("impact").innerHTML=
category;

let meter=Math.min((carbon/500)*100,100);

document.getElementById("meterBar").style.width=
meter+"%";

createChart(
transport,
energy,
foodEmission,
flightEmission
);
}

function createChart(
transport,
energy,
food,
flights
){

const ctx=
document.getElementById("carbonChart");

if(chart){
chart.destroy();
}

chart=new Chart(ctx,{
type:'doughnut',
data:{
labels:[
'Transport',
'Home Energy',
'Food',
'Flights'
],
datasets:[{
data:[
transport,
energy,
food,
flights
]
}]
}
});
}

function resetForm(){

document.getElementById("car").value="";

document.getElementById("electricity").value="";

document.getElementById("flights").value="";

document.getElementById("food").value="";

document.getElementById("output").innerHTML="";

document.getElementById("ecoScore").innerHTML="0";

document.getElementById("monthlyCO2").innerHTML="0";

document.getElementById("annualCO2").innerHTML="0";

document.getElementById("impact").innerHTML="-";

document.getElementById("meterBar").style.width="0%";

if(chart){
chart.destroy();
}
}

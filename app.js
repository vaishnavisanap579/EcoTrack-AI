function calculate() {

  let car = Number(document.getElementById("car").value);
  let electricity = Number(document.getElementById("electricity").value);
  let flights = Number(document.getElementById("flights").value);
  let food = document.getElementById("food").value.toLowerCase();

  let carbon =
    (car * 0.21) +
    (electricity * 0.82) +
    (flights * 90);

  if(food === "non-veg"){
    carbon += 50;
  } else {
    carbon += 20;
  }

  let level = "";
  let suggestions = "";

  if (carbon < 100) {
    level = "🌱 Low Carbon Footprint";
    suggestions =
      "Great job! Continue using eco-friendly habits.";
  }

  else if (carbon < 300) {
    level = "⚠️ Medium Carbon Footprint";
    suggestions =
      "Try using public transport, save electricity and reduce unnecessary travel.";
  }

  else {
    level = "🔥 High Carbon Footprint";
    suggestions =
      "Reduce flights, use renewable energy and adopt sustainable transport options.";
  }

  document.getElementById("output").innerHTML =
    "<b>Estimated Carbon Footprint:</b> " +
    carbon.toFixed(2) +
    " kg CO₂/month <br><br>" +

    "<b>Category:</b> " +
    level +
    "<br><br>" +

    "<b>AI Recommendation:</b><br>" +
    suggestions +
    "<br><br>" +

    "<b>7-Day Eco Challenge:</b><br>" +
    "Day 1: Switch off unused lights<br>" +
    "Day 2: Walk or cycle for short trips<br>" +
    "Day 3: Save water<br>" +
    "Day 4: Avoid plastic bags<br>" +
    "Day 5: Eat one eco-friendly meal<br>" +
    "Day 6: Use public transport<br>" +
    "Day 7: Plant a tree";
}
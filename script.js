let cups = 0;
localStorage.setItem("cups", 0);
localStorage.getItem("cups");


function increaseWater()
{
 if (cups < 10)
 {
  cups = cups + 1; 
  updateText();
 }
 else if (cups = 10)
 {
    cups = 11; 
    updateText();
    document.getElementById("Water").style.display = "none";
    document.getElementById("Hydrate").style.display = "block";
 }
}

function toggleShow()
{
  let water_div = document.getElementById("water_dropdown");
  console.log(water_div.style.visibility);
  if (water_div.style.visibility === "visible")
  {
    water_div.style.visibility = "hidden";
    console.log("Hiding");
  }
  else
  {
    water_div.style.visibility = "visible";
    console.log("Showing");
  }
}

function updateText()
{
  let text_div = document.getElementById("water_record");
  text_div.innerHTML = cups;
}

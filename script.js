let cups = 0;
let water_num = 0;
let water_width = 0;
localStorage.setItem("cups", 0);
localStorage.getItem("cups");

function increaseWater()
{
 if (cups < 10)
 {
  cups = cups + 1; 
  updateText();
  let elem = document.getElementById("water_bar");

  if (water_width < 100) {
    water_width = water_width + 1; 
    elem.style.width = (100/11)*water_width + "%";

  }
 }
 else if (cups = 10)
 {
    let text_div = document.getElementById("water_record");
    text_div.innerHTML = "You drank 11 cups today!";
    let elem = document.getElementById("water_bar");
    elem.style.width = "100%";
    document.getElementById("Water").style.display = "none";
    document.getElementById("Hydrate").style.display = "block";
 }
}

function toggleShowWater()
{
  clearmenu();
  let water_div = document.getElementById("water_dropdown");
  console.log(water_div.style.display);
  if (water_div.style.display === "block")
  {
    water_div.style.display = "none";
    console.log("Hiding");
  }
  else
  {
    water_div.style.display = "block";
    console.log("Showing");
  }
}

function toggleShowMeal()
{
  clearmenu();
  let water_div = document.getElementById("meal_dropdown");
  console.log(water_div.style.display);
  if (water_div.style.display === "block")
  {
    water_div.style.display = "none";
    console.log("Hiding");
  }
  else
  {
    water_div.style.display = "block";
    console.log("Showing");
  }
}

function clearmenu()
{
   const all = document.getElementsByClassName("dropmenu");
   for(let i = 0; i < all.length; i = i + 1)
   {
	all[i].style.display = "none";
   }
}

function updateText()
{
  let text_div = document.getElementById("water_record");
  text_div.innerHTML = cups;
}

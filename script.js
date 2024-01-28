let cups = 0;
let water_width = 0;

function resetcups()
{
  cups = 0;
  updateText("water_record");    
  let elem = document.getElementById("water_bar");
  elem.style.width = "1px";
  water_width = 0;
  localStorage.removeItem("cups");
  localStorage.clear();
  clearmenu();
  clearsprites();
  document.getElementById("Default").style.display = "block";
}

function increaseWater()
{
 if (cups < 10)
 {
  cups = cups + 1; 
  localStorage.setItem("cups", JSON.stringify({cups}));
  updateText("water_record");
  let elem = document.getElementById("water_bar");

  if (water_width < 100) {
    water_width = water_width + 1; 
    elem.style.width = (100/11)*water_width + "%";

  }
 }
 else if (cups = 10)
 {
    cups = 11;
    localStorage.setItem("cups", JSON.stringify({cups}));
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
  clearsprites();
  let water_div = document.getElementById("water_dropdown");
  let water_display = water_div.style.display;
  clearmenu();
  console.log(water_div.style.display);
  if (water_display === "block")
  {
    document.getElementById("Default").style.display = "block";
    water_div.style.display = "none";
    console.log("Hiding");
  }
  else
  {  
    if (cups < 11)
    {
   	document.getElementById("Water").style.display = "block";
    }
    else
    {
        document.getElementById("Hydrate").style.display = "block";
    }
    water_div.style.display = "block";
    console.log("Showing");
  }
}

function toggleShowMeal()
{
  
  let meal_div = document.getElementById("meal_dropdown");
  let meal_display = meal_div.style.display;
  clearmenu();
  console.log(meal_div.style.display);
  if (meal_display === "block")
  {
    meal_div.style.display = "none";
    console.log("Hiding");
  }
  else
  {
    meal_div.style.display = "block";
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

function clearsprites()
{
   const all = document.getElementsByClassName("sprites");
   for(let i = 0; i < all.length; i = i + 1)
   {
	all[i].style.display = "none";
   }
}

function updateText(id)
{
  let text_div = document.getElementById(id);
  text_div.innerHTML = cups;
}

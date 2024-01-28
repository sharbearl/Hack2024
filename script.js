let cups = 0;
let calorie = 0;
let zs = 0;
let workout = 0;
let water_width = 0;

if (localStorage.getItem("cups") != undefined)
{
    cups = Number(localStorage.getItem("cups"));
    console.log(cups)
    updateText("water_record")
}

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
  localStorage.setItem("cups", String(cups));
  updateText("water_record");
  let elem = document.getElementById("water_bar");
  elem.style.width = (100/11)*cups + "%";
  
 }
 else if (cups = 10)
 {
    cups = 11;
    localStorage.setItem("cups", String(cups));
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
  if (localStorage.getItem("cups") != undefined)
  {
    cups = Number(localStorage.getItem("cups"));
    console.log(cups);
    updateText("food_record");    
    let elem = document.getElementById("water_bar");
    elem.style.width = (100/11)*cups + "%";
  }
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

function increaseCalories(amount)
{
 if (calorie < 1999)
 {
  calorie = calorie + amount; 
  //localStorage.setItem("cups", String(cups));
  updateText("food_record");
  if (calorie >= 1999)
  {
     calorie = 2000;    
     let text_div = document.getElementById("food_record");
	console.log(text_div);
     text_div.innerHTML = "You ate 2000 calories today!";
     document.getElementById("Hungry").style.display = "none";
     document.getElementById("Hydrate").style.display = "block";
  }
  let elem = document.getElementById("food_bar");
  elem.style.width = (100/2000)*calorie + "%";
 }
 else if (calorie = 1999)
 {
    calorie = 1999;
    //localStorage.setItem("cups", String(cups));
    let text_div = document.getElementById("food_record");
    text_div.innerHTML = "You ate 2000 calories today!";
    let elem = document.getElementById("calorie_bar");
    elem.style.width = "100%";
    document.getElementById("Hungry").style.display = "none";
    document.getElementById("Hydrate").style.display = "block";
 }
}

function toggleShowMeal()
{
  //Need to add local storage
  clearsprites();
  let meal_div = document.getElementById("meal_dropdown");
  let meal_display = meal_div.style.display;
  clearmenu();
  console.log(meal_div.style.display);
  if (meal_display === "block")
  {
    document.getElementById("Default").style.display = "block";
    meal_div.style.display = "none";
    console.log("Hiding");
  }
  else
  {
    if (calorie < 11)
    {
   	document.getElementById("Hungry").style.display = "block";
    }
    else
    {
        document.getElementById("Hydrate").style.display = "block";
    }
    meal_div.style.display = "block";
    console.log("Showing");
  }
}

function increaseSleep()
{
  let sleep_div = document.getElementById("output");
  zs = Number(sleep_div.innerHTML);
  document.getElementById("sleepSlider").style.display = "none";
  document.getElementById("submit").style.display = "none";
  if (zs > 9)
  {
     zs = 9;
     let text_div = document.getElementById("sleep_record");

     text_div.innerHTML = "You slept enough today!";
      document.getElementById("Hungry").style.display = "none";
      document.getElementById("Hydrate").style.display = "block";
  }
  else
  {
     let text_div = document.getElementById("sleep_record");
	console.log(text_div);
     text_div.innerHTML = "Sleep more tomorrow!";
  }
  let elem = document.getElementById("sleep_bar");
	console.log(elem);
  elem.style.width = (100/9)*zs + "%";
}

function toggleShowSleep()
{
  //Need to add local storage
  clearsprites();
  let sleep_div = document.getElementById("sleep_dropdown");
  let sleep_display = sleep_div.style.display;
  clearmenu();
  console.log(sleep_div.style.display);
  if (sleep_display === "block")
  {
    document.getElementById("Default").style.display = "block";
    sleep_div.style.display = "none";
    console.log("Hiding");
  }
  else
  {
    if (zs < 9)
    {
   	document.getElementById("Hungry").style.display = "block";
    }
    else
    {
        document.getElementById("Hydrate").style.display = "block";
    }
    sleep_div.style.display = "block";
    console.log("Showing");
  }
}

function increaseBurn(amount)
{
 if (workout < 1999)
 {
  workout = workout + amount; 
  //localStorage.setItem("cups", String(cups));
  updateText("exercise_record");
  if (workout >= 1999)
  {
     workout = 2000;    
     let text_div = document.getElementById("exercise_record");
	console.log(text_div);
     text_div.innerHTML = "You burned 2000 calories today!";
     document.getElementById("Hungry").style.display = "none";
     document.getElementById("Hydrate").style.display = "block";
  }
  let elem = document.getElementById("exercise_bar");
  elem.style.width = (100/2000)*workout + "%";
 }
 else if (workout = 1999)
 {
    workout = 1999;
    //localStorage.setItem("cups", String(cups));
    let text_div = document.getElementById("exercise_record");
    text_div.innerHTML = "You burned 2000 calories today!";
    let elem = document.getElementById("workout_bar");
    elem.style.width = "100%";
    document.getElementById("Hungry").style.display = "none";
    document.getElementById("Hydrate").style.display = "block";
 }
}

function toggleShowExercise()
{
  //Need to add local storage
  clearsprites();
  let exercise_div = document.getElementById("exercise_dropdown");
  let exercise_display = exercise_div.style.display;
  clearmenu();
  console.log(exercise_div.style.display);
  if (exercise_display === "block")
  {
    document.getElementById("Default").style.display = "block";
    exercise_div.style.display = "none";
    console.log("Hiding");
  }
  else
  {
    if (workout < 9)
    {
   	document.getElementById("Hungry").style.display = "block";
    }
    else
    {
        document.getElementById("Hydrate").style.display = "block";
    }
    exercise_div.style.display = "block";
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
  if (text_div != null)
  {
    if (id === "water_record")
    {
      text_div.innerHTML = cups;
    }
    else if (id === "food_record")
    {
      text_div.innerHTML = calorie;
    }
    else if (id === "exercise_record")
    {
      text_div.innerHTML = workout;
    }
  }
}

function outputUpdate(num) {
    document.querySelector('#output').value = num;
    }

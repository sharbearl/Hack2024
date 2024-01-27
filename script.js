let cups = 0;


function increaseWater()
{
 cups = cups + 1; 
 updateText();
}

function toggleShow()
{
  let water_div = document.getElementById("water_dropdown");
  console.log(water_div.style.visibility);
  if (water_div.style.visibility === "visible")
  {
    water_div.style.display = "hidden";
  }
  else
  {
    water_div.style.display = "visible";
  }
}

function updateText()
{
  let text_div = document.getElementById("water_record");
  text_div.innerHTML = cups;
}

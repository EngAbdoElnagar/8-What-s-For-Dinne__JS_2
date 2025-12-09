let imgHtml = document.getElementById("img");
let reangHtml = document.getElementById("reang");
let reviewsHtml = document.getElementById("reviews");
let prepTimeHtml = document.getElementById("prepTime");
let cookTimeHtml = document.getElementById("cookTime");
let servingsHtml = document.getElementById("servings");
let levelHtml = document.getElementById("level");
let cuisineHtml = document.getElementById("cuisine");
let titleHtml = document.getElementById("title");
let descHtml = document.getElementById("desc");
let alarmHtml = document.getElementById("alarm"); //Alarm

let NutrCaloriesHtml = document.getElementById("NutrCalories");
let NutrProteinHtml = document.getElementById("NutrProtein");
let NutrCarbohydratesHtml = document.getElementById("NutrCarbohydrates");
let NutrFatHtml = document.getElementById("NutrFat");
let NutrFiberHtml = document.getElementById("NutrFiber");
let NutrSodiumHtml = document.getElementById("NutrSodium");
let btn = document.getElementById("btn");

function test4() {
  let item = content[Math.floor(Math.random() * content.length)];
  if (item.cookTime < 30) {
    document.querySelector(".alarm").classList.add("d-none");
  } else {
    document.querySelector(".alarm").classList.remove("d-none");
  }
  imgHtml.src = item.img;
  reangHtml.innerHTML = item.num;
  reviewsHtml.innerHTML = item.reviews;
  prepTimeHtml.innerHTML = item.prepTime;
  cookTimeHtml.innerHTML = item.cookTime;
  servingsHtml.innerHTML = item.servings;
  levelHtml.innerHTML = item.level;
  cuisineHtml.innerHTML = item.cuisine;
  titleHtml.innerHTML = item.title;
  descHtml.innerHTML = item.description;

  ingredList.innerHTML = "";
  for (let i = 0; i < item.ingred.length; i++) {
    ingredList.innerHTML += `
      <li class="d-flex align-items-center mb-2">
        <div class="num-circle">${i + 1}</div>
        <p>${item.ingred[i]}</p>
      </li>`;
  }

  instrucList.innerHTML = "";
  for (let i = 0; i < item.instruc.length; i++) {
    instrucList.innerHTML += `
      <li class="d-flex gap-2 align-items-center mb-3"">
        <span class="num-circle">${i + 1}</span>
        <p>${item.instruc[i]}</p>
      </li>`;
  }

  NutrCaloriesHtml.innerHTML = item.Calories;
  NutrProteinHtml.innerHTML = item.Protein;
  NutrCarbohydratesHtml.innerHTML = item.Carbohydrates;
  NutrFatHtml.innerHTML = item.Fat;
  NutrFiberHtml.innerHTML = item.Fiber;
  NutrSodiumHtml.innerHTML = item.Sodium;

  chefTipsList.innerHTML = "";
  for (let i = 0; i < item.tips.length; i++) {
    chefTipsList.innerHTML += `<li> <span class="icon_tips"><i class="fa-solid fa-check"></i></span> ${item.tips[i]}</li>`;
  }
}
window.addEventListener("DOMContentLoaded", test4);

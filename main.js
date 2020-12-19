var sideRadio = document.querySelector('#side');
var mainDishRadio = document.querySelector('#mainDish');
var dessertRadio = document.querySelector('#dessert');
var letsCookButton = document.querySelector('.lets-cook');
var mealToMake = document.querySelector('#suggested-dish');
var cookingPotImg= document.querySelector('.cooking-pot');
// var radioButtons = document.getElementsByName("dish");
var youShouldCook= document.querySelector('.what-to-cook');
var suggestedDish= document.querySelector('#suggested-dish');
var errorMessage = document.querySelector('#error-message');
var clearButton = document.querySelector('#clear-section');
var submitButton = document.querySelector('#submit');
var hiddenHomeView = document.querySelectorAll('.hidden');
var homeView = document.querySelector('.home-view');
var loginPage = document.querySelector(".login-page");


letsCookButton.addEventListener('click', suggestRecipe);
clearButton.addEventListener('click', clearResults);
submitButton.addEventListener('click', login)


function login() {
  event.preventDefault();
  console.log(hiddenHomeView)
  hiddenHomeView[0].style.display = "flex"
  homeView.style.display = "flex"
  loginPage.style.display = 'none';
}

function suggestRecipe() {
  event.preventDefault();
  if (sideRadio.checked) {
    changeView();
    mealToMake.innerText =  pickRandomRecipe(sides) + "!";
  } else if (mainDishRadio.checked) {
    changeView();
    mealToMake.innerText = pickRandomRecipe(mains) + "!";
  } else if(dessertRadio.checked){
    changeView();
    mealToMake.innerText = pickRandomRecipe(desserts) + "!";
  } else {
    errorMessage.style.visibility = "visible"
  }
};
function clearResults() {
}
function showErrorMessage() {
  errorMessage.classList.toggle("hidden")
 // errorMessage.style.display = 'flex'
}

function changeView() {
  youShouldCook.style.display = 'flex';
  cookingPotImg.style.display = 'none';
}

function pickRandomRecipe(type) {
  var randomArrayIndex = Math.floor(Math.random()*type.length);
  return type[randomArrayIndex];
};

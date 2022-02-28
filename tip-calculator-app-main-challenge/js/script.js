const STARTING_VALUE = 0.0;
const STARTING_PERCENTAGE = 15;
/*link a la pagina del input https://www.geeksforgeeks.org/how-to-place-cursor-position-at-end-of-text-in-text-input-field-using-javascript/ */
const STARTING_NUMBER_OF_PEOPLE = 1;
let current_value = STARTING_VALUE;
let current_percentage = STARTING_PERCENTAGE;
let current_number_of_people = STARTING_NUMBER_OF_PEOPLE;
let input_1_is_empty = true;
/*------------------------------------Query Selectors-------------------------------------------*/
let input_1 = document.querySelector(".input-1");
let input_2 = document.querySelector(".input-2");
let input_3 = document.querySelector(".input-3");
let percentage_buttons = document.querySelectorAll(".percentage-button");
let reset_button = document.querySelector(".reset-button");
/*-----------------------------------AddEventListeners------------------------------------------*/
input_1.addEventListener("input",UpdateDependencies);
/*-----------------------------------Functions------------------------------------------*/

function UpdateDependencies(e){
  CheckInput1(e);
  let gian = input_1.value;
  console.log(gian);

  current_value === STARTING_VALUE ? current_value = e.data : current_value = current_value + e.data;



}

function CheckInput1(e){
  console.log("hola");
  if(input_1_is_empty === true) UpdateInput1(e);
  return;
}

function UpdateInput1(e){
  let end = input_1.value.length;
  input_1.value = input_1.value.substring(0, input_1.value.length-1);
}

window.onload = function(){

}

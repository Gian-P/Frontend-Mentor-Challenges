const STARTING_VALUE = 0.0;
const STARTING_PERCENTAGE = 15;
const STARTING_NUMBER_OF_PEOPLE = 1;
let current_value = STARTING_VALUE;
let current_percentage = STARTING_PERCENTAGE;
let current_number_of_people = STARTING_NUMBER_OF_PEOPLE;
let input_1_is_empty = true;
let input_2_is_empty = true;
let input_3_is_empty = true;
/*------------------------------------Query Selectors-------------------------------------------*/
let input_1 = document.querySelector(".input-1");
let input_2 = document.querySelector(".input-2");
let input_3 = document.querySelector(".input-3");
let percentage_buttons = document.querySelectorAll(".percentage-button");
let reset_button = document.querySelector(".reset-button");
/*-----------------------------------AddEventListeners------------------------------------------*/
input_1.addEventListener("input",UpdateDependencies);
input_2.addEventListener("input",UpdateDependencies);
input_3.addEventListener("input",UpdateDependencies);
/*-----------------------------------Functions------------------------------------------*/

function UpdateDependencies(e){ 
  // Esto evita que se escriban letras en los inputs
  if((Number.isNaN(Number(e.data)))) ValidateInput(e);
  // Si no es un backspace ni un space ni una letra ejecute lo que esta dentro
  if(e.data !== null && e.data !== ' ' && Number.isNaN(Number(e.data)) === false){
    CheckInputs(e);
    UpdateInputs(e);
  }
  // maneja los backspace y los spaces
  if(e.data === null || e.data === ' ') SpaceHandler(e);
}

//Esta funcion evita que se digiten letras en los inputs.
function ValidateInput(gian){
  if(gian.srcElement.classList[0] === 'input-1') input_1.value = input_1.value.substring(0,input_1.value.length - 1);

  if(gian.srcElement.classList[0] === 'input-2') input_2.value = input_2.value.substring(0,input_2.value.length - 1);

  if(gian.srcElement.classList[0] === 'input-3') input_3.value = input_3.value.substring(0,input_3.value.length - 1);
}
/*
function RestartBoolInput(e){
  switch (e.srcElement.classList[0]) {
    case 'input-1':
      input_1_is_empty = true;
      break
    case 'input-2':
      input_2_is_empty = true;
      break
    case 'input-3':
      input_3_is_empty = true;
      break
    default:
      break
  }
}*/

function CheckInputs(e){
  if(e.srcElement.classList[0] === 'input-1' && input_1_is_empty === true){
    input_1.value = input_1.value.replace('0.0','   ');
    input_1_is_empty = false;
  }

  if(e.srcElement.classList[0] === 'input-2' && input_2_is_empty === true){
    input_2.value = input_2.value.replace('Custom','      ');
    input_2_is_empty = false;
  }

  if(e.srcElement.classList[0] === 'input-3' && input_3_is_empty === true){
    input_3.value = input_3.value.replace('0.0','   ');
    input_3_is_empty = false;
  }
}

function UpdateInputs(e){
  if(e.srcElement.classList[0] === 'input-1'){
    input_1.value = input_1.value.substring(1,input_1.value.length);
  }
  if(e.srcElement.classList[0] === 'input-2'){
    input_2.value = input_2.value.substring(1,input_2.value.length);
  }
  if(e.srcElement.classList[0] === 'input-3'){
    input_3.value = input_3.value.substring(1,input_3.value.length);

  }
}

function SpaceHandler(e){
  switch (e.srcElement.classList[0]) {
    case 'input-1':
      ManageSpace(input_1_is_empty,input_1,e)
      break
    case 'input-2':
      ManageSpace(input_2_is_empty,input_2,e)
      break
    case 'input-3':
      ManageSpace(input_3_is_empty,input_3,e)
      break
    default:
      break
  }
}
let NewBool;
function ManageSpace(BoolInput,input,e){
    NewBool = CheckIfEmpty(input);
    if(e.data === ' ' && BoolInput === false) input.value = input.value.substring(0,input.value.length - 1);

    if(e.data === null && BoolInput === false) input.value = ' ' + input.value.substring(0,input.value.length);

    if((BoolInput === true || input.value === "                   ") && e.srcElement.classList[0] !== 'input-2' ){  
      input.value = "                0.0";
      RestartBoolInput(e);
    }
    //  Si es el input 2 y esta vacio ejecuta las ordenes
    if((e.srcElement.classList[0] === 'input-2' && BoolInput === true) || (e.srcElement.classList[0] === 'input-2' && NewBool === true)) {
      input.value = "   Custom";
      RestartBoolInput(e);
  }
}

function CheckIfEmpty(input){
  if(input.value === "        " || input.value === "   Custo" ) return true;

  if(input.value === "                   ") return true;
}

 

function RestartBoolInput(e){
  switch (e.srcElement.classList[0]) {
    case 'input-1':
      input_1_is_empty = true;
      break
    case 'input-2':
      input_2_is_empty = true;
      break
    case 'input-3':
      input_3_is_empty = true;
      break
    default:
      break
  }
}
window.onload = function(){

} 
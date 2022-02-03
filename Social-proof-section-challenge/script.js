let First_rating = document.querySelector(".first-5-stars");
let Second_rating = document.querySelector(".second-5-stars");
let Third_rating = document.querySelector(".third-5-stars");
for(let i = 0; i < 5; i++){
  First_rating.insertAdjacentHTML('afterbegin','<img src="./images/icon-star.svg" alt="">');
  Second_rating.insertAdjacentHTML('afterbegin','<img src="./images/icon-star.svg" alt="">');
  Third_rating.insertAdjacentHTML('afterbegin','<img src="./images/icon-star.svg" alt="">');
}
let stars_container1 = document.querySelector(".stars-container1");
let stars_container2 = document.querySelector(".stars-container2");
let stars_container3 = document.querySelector(".stars-container3");

function Create_Stars (stars_container) {
  for(let i = 0; i < 5; i++){
    let star_img = document.createElement('img');
    star_img.src = './images/icon-star.svg';
    star_img.classList.add('star')
    stars_container.appendChild(star_img);

  }
}
Create_Stars(stars_container1);
Create_Stars(stars_container2);
Create_Stars(stars_container3);



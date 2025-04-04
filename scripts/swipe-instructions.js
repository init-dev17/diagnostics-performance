import { presentation } from "./swipe-images.js";


console.log(presentation);


const swiperWrapper = document.querySelector(".swiper-wrapper");
console.log(presentation[0]);

for(let site in presentation) {

  

  const newSlide = document.createElement("div");
  newSlide.classList.add("swiper-slide");
  newSlide.id = `slide${Number(site)+1}`;
  

  // bon URL : diagnostics-performance/public/assets/img/
  newSlide.style.background = `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(/diagnostics-performance/public/assets/img/${presentation[site].img}) fixed center/cover`;

  // debug dev : ../public/assets/img/
    // newSlide.style.background = `linear-gradient(rgba(0, 0, 0, 0.527),rgba(0, 0, 0, 0.5)), url(../public/assets/img/${presentation[site].img}) fixed center/cover`;

  // https://i17.io/diagnostics-performance/public/assets/img/pexels-19x14-8478247.jpg



//   const newCard = document.createElement("div");
//   newCard.classList.add("swipperCard");
//   const h1div = document.createElement("h1");
//   h1div.style.fontFamily = `${presentation[site].font}`;
//   h1div.style.fontSize = `${presentation[site].fontSize}`;
//   h1div.style.color = `${presentation[site].color}`;
//   h1div.innerText = `${presentation[site].name}`
//   newCard.append(h1div);
//   const newText = document.createElement("p");
//   newText.innerText = `${presentation[site].text}`;
//   newCard.append(newText);
//   let aButton = document.createElement("span");
//   aButton.innerHTML = `<a href=${presentation[site].url}>Website preview</a>`;

//   newCard.append(aButton);

//   newSlide.append(newCard);
  swiperWrapper.append(newSlide);
  
  console.log(newSlide);
  
}
 
const burgerMenu = document.querySelector(".burger-menu");
const navigation = document.querySelector("#navigation");

burgerMenu.addEventListener("click", (event) => {  
  event.preventDefault();
  console.log(navigation);
  navigation.classList.toggle("hidden"); 

  // Changement logo BurgerMenu si actif
  if (navigation.classList.contains('hidden')) {
    burgerMenu.querySelector("img").src ="./public/assets/icons/iconamoon--menu-burger-horizontal-fill.svg" ;
  } else {
    burgerMenu.querySelector("img").src = "./public/assets/icons/radix-icons--cross-1.svg" ;
  }
});

 
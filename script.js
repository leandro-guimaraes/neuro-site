'use strict';



/**
 * Add event listener on multiple elements
 */

const addEventOnElements = function (elements, eventType, callback) {
  for (let i = 0, len = elements.length; i < len; i++) {
    elements[i].addEventListener(eventType, callback);
  }
}

/**
 * MOBILE NAVBAR TOGGLER
 */

const navbar = document.querySelector("[data-navbar]");
const navTogglers = document.querySelectorAll("[data-nav-toggler]");

const toggleNav = () => {
  navbar.classList.toggle("active");
  document.body.classList.toggle("nav-active");
}

addEventOnElements(navTogglers, "click", toggleNav);



/**
 * HEADER ANIMATION
 * When scrolled donw to 100px header will be active
 */

const header = document.querySelector("[data-header]");
const backTopBtn = document.querySelector("[data-back-top-btn]");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    header.classList.add("active");
    backTopBtn.classList.add("active");
  } else {
    header.classList.remove("active");
    backTopBtn.classList.remove("active");
  }
});



/**
 * SLIDER
 */

const slider = document.querySelector("[data-slider]");
const sliderContainer = document.querySelector("[data-slider-container]");
const sliderPrevBtn = document.querySelector("[data-slider-prev]");
const sliderNextBtn = document.querySelector("[data-slider-next]");

let totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
let totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

let currentSlidePos = 0;

const moveSliderItem = function () {
  sliderContainer.style.transform = `translateX(-${sliderContainer.children[currentSlidePos].offsetLeft}px)`;
}

/**
 * NEXT SLIDE
 */

const slideNext = function () {
  const slideEnd = currentSlidePos >= totalSlidableItems;

  if (slideEnd) {
    currentSlidePos = 0;
  } else {
    currentSlidePos++;
  }

  moveSliderItem();
}

sliderNextBtn.addEventListener("click", slideNext);

/**
 * PREVIOUS SLIDE
 */

const slidePrev = function () {
  if (currentSlidePos <= 0) {
    currentSlidePos = totalSlidableItems;
  } else {
    currentSlidePos--;
  }

  moveSliderItem();
}

sliderPrevBtn.addEventListener("click", slidePrev);

/**
 * RESPONSIVE
 */
window.addEventListener("resize", function () {
  totalSliderVisibleItems = Number(getComputedStyle(slider).getPropertyValue("--slider-items"));
  totalSlidableItems = sliderContainer.childElementCount - totalSliderVisibleItems;

  moveSliderItem();
});




// Função para verificar o tamanho da tela e adicionar/remover classes conforme necessário
function ajustarClasseGrid() {
  var screenWidth = window.innerWidth;

  // Verifica se a largura da tela é menor que um certo ponto de interrupção (por exemplo, 768 pixels)
  if (screenWidth < 768) {
    // Adiciona a classe 'grid' e remove a classe 'grid-list-list' e 'grid-list-bonus' em todos os elementos ul
    var grids = document.querySelectorAll('.grid-list-list, .grid-list-bonus');
    grids.forEach(function(grid) {
      grid.classList.add('grid');
      grid.classList.remove('grid-list-list');
      grid.classList.remove('grid-list-bonus');
    });
  } else {
    // Remove a classe 'grid' e adiciona a classe 'grid-list-list' e 'grid-list-bonus' em todos os elementos ul
    var grids = document.querySelectorAll('.grid');
    grids.forEach(function(grid) {
      grid.classList.add('grid-list-list', 'grid-list-bonus');
      grid.classList.remove('grid');
    });
  }
}

// Executa a função ao carregar a página e redimensionar a janela
window.addEventListener('DOMContentLoaded', ajustarClasseGrid);
window.addEventListener('resize', ajustarClasseGrid);








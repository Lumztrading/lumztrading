var modal = document.getElementById('navbarLinks');
const x = document.querySelectorAll('#navLink');
const sliderContainer = document.querySelector('.slider-container');
const innerSlider = document.querySelector('.inner-slider');

x.forEach(function(element) {
    element.addEventListener("click", closeNav);
});

function openNav() {
  document.getElementById("navbarLinks").style.width = "100%";
}

function closeNav() {
  document.getElementById("navbarLinks").style.width = "0%";
}

window.onclick = function(event) {
    if (event.target == modal )  {
        modal.style.width = "0%";
    }
}



let isDragging = false;
let startX;
let translateX = 0;

sliderContainer.addEventListener('mousedown', (e) => {
  isDragging = true;
  startX = e.clientX - innerSlider.offsetLeft;
});

sliderContainer.addEventListener('mousemove', (e) => {
  if (!isDragging) return;
  e.preventDefault();
  const x = e.clientX - innerSlider.offsetLeft;
  const moveX = x - startX;
  innerSlider.style.transform = `translateX(${translateX + moveX}px)`;
});

sliderContainer.addEventListener('mouseup', () => {
  isDragging = false;
  translateX += startX - e.clientX;
});

sliderContainer.addEventListener('mouseleave', () => {
  isDragging = false;
});


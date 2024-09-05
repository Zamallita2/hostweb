function generarTonoAzulNotorio() {
  const azul = Math.floor(Math.random() * 156) + 100;
  const verde = Math.floor(Math.random() * 100);
  return `rgb(0, ${verde}, ${azul})`;
}

setInterval(() => {
  document.querySelector('header').style.backgroundColor = generarTonoAzulNotorio();
}, 3000);
let currentIndex = 0;
const items = document.querySelectorAll('.carrusel-item');
const totalItems = items.length;

document.getElementById('next').addEventListener('click', () => {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex + 1) % totalItems;
  items[currentIndex].classList.add('active');
});

document.getElementById('prev').addEventListener('click', () => {
  items[currentIndex].classList.remove('active');
  currentIndex = (currentIndex - 1 + totalItems) % totalItems;
  items[currentIndex].classList.add('active');
});


setInterval(() => {
  document.getElementById('next').click();
}, 5000);
    function updateDate() {
        const dateElement = document.getElementById('date');
        const now = new Date();
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = now.toLocaleDateString('es-ES', options);
        dateElement.textContent = formattedDate;
    }
    updateDate();
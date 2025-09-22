console.log("started");

const menu = document.getElementById('menu');
const nav = document.getElementById('nave');

menu.addEventListener('click', function() {
  nav.classList.toggle('open');
});
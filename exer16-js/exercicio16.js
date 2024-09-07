document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-alternar');
    const navMenu = document.getElementById('meuNav-menu');
  
    menuToggle.addEventListener('click', function() {
      navMenu.classList.toggle('active');
    });
  });
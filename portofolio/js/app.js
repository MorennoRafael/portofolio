const navbar = document.getElementById('navbar');
window.addEventListener('scroll', function() {
  if (window.scrollY > 20) {
    navbar.classList.add('shadow');
  } else {
    navbar.classList.remove('shadow');
  }
});
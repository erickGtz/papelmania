// Cargar el navbar
document.addEventListener('DOMContentLoaded', function () {
  fetch('../components/nav.html')
    .then((response) => response.text())
    .then((data) => {
      document.getElementById('navbar-container').innerHTML = data;
    });
});

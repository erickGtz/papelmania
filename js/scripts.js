
function nextView(viewNumber) {
  document.getElementById(`view${viewNumber - 1}`).style.display = "none";
  document.getElementById(`view${viewNumber}`).style.display = "block";
}

function prevView(viewNumber) {
  document.getElementById(`view${viewNumber + 1}`).style.display = "none";
  document.getElementById(`view${viewNumber}`).style.display = "block";
}

function finalize() {
  alert("¡Registro completado!");
  // Aquí podrías redirigir o realizar otras acciones después del registro
}

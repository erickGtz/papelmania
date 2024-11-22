document.addEventListener('DOMContentLoaded', function () {
  const steps = document.querySelectorAll('.step');
  const lines = document.querySelectorAll('.line');

  let currentStep = 1; // Modifica este valor para reflejar el estado actual del pedido

  steps.forEach((step, index) => {
    if (index <= currentStep) {
      step.classList.add('completed');
    }
  });

  lines.forEach((line, index) => {
    if (index < currentStep) {
      line.classList.add('completed');
    }
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const params = new URLSearchParams(window.location.search);
    const pedidoId = params.get('id');
    console.log('ID del pedido obtenido:', pedidoId); // Verificar en la consola

    if (pedidoId) {
        document.getElementById('pedido-id').textContent = `Pedido #${pedidoId}`;
    }
});

// Datos de pedidos
const pedidos = [
  { id: 1, productos: "Tarjeta arduino (2 pzas)", total: "$300.00", estado: "En camino" },

];

/*
const pedidos = [
  { id: 1, productos: "Tarjeta arduino uno, jumpers", total: "$215.00", estado: "Recibido" },
  { id: 2, productos: "Libreta, tijeras", total: "$48.00", estado: "Recibido" },
  { id: 3, productos: "ESP32, resistencias, ventilador", total: "$350.00", estado: "En camino" },
  { id: 4, productos: "Pilas", total: "$30", estado: "En camino" }
];*/

// Función para generar los pedidos de forma dinámica
function renderPedidos() {
  const container = document.getElementById('pedidos-container');
  pedidos.forEach(pedido => {
    // Crear estructura HTML para cada pedido
    const pedidoHTML = `
      <div class="card mb-3">
        <div class="card-header d-flex justify-content-between align-items-center">
          <span>Pedido #${pedido.id}</span>
          ${pedido.estado === "En camino" ? `<a href="./detallesSeguimiento.html?id=${pedido.id}" class="btn btn-primary btn-color">Detalles</a>` : ''}

        </div>

        <div class="card-body">
          <p><strong>Productos:</strong> ${pedido.productos}</p>
          <p><strong>Total:</strong> ${pedido.total}</p>
          <p><strong>Estado:</strong> ${pedido.estado}</p>
        </div>
      </div>
    `;
    // Insertar el pedido en el contenedor
    container.innerHTML += pedidoHTML;
  });
}

// Ejecutar la función para renderizar los pedidos al cargar la página
document.addEventListener("DOMContentLoaded", renderPedidos);
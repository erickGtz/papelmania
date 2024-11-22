// Productos de ejemplo
const products = [
  { id: 1, name: "Placa Petri con tapa", price: 40, image: "../img/placa-petri.webp" },
  { id: 2, name: "Led de colores", price: 5, image: "../img/led.jpeg" },
  { id: 3, name: "Pilas duracel grandes D", price: 100, image: "../img/pilas.jpeg" },
  { id: 4, name: "Servo motor 99", price: 120, image: "../img/servo.jpeg" },
  { id: 5, name: "Conjunto de resistores", price: 10, image: "../img/resistor.jpeg" },
  { id: 6, name: "Pantalla LCD OLED", price: 50, image: "../img/lcd.jpeg" },
  { id: 7, name: "Pluma azul de gel", price: 15, image: "../img/pluma-azul.jpg" },
  { id: 8, name: "Pluma marca roja bic", price: 18, image: "../img/pluma-roja.jpg" },
  { id: 9, name: "Pluma marca patito negra", price: 12, image: "../img/pluma-negra.png" },
  { id: 10, name: "Pluma verde marca AZOR", price: 17, image: "../img/pluma-verde.webp" },
  { id: 11, name: "Pack de plumas (10)", price: 12, image: "../img/pack-plumas.jpeg" },
  { id: 12, name: "Pluma gel vegana ", price: 25, image: "../img/pluma-gel.webp" },
  { id: 13, name: "Portaobjeto 1pza.", price: 150, image: "../img/microscopio.jpg" },
  { id: 14, name: "Pipeta de plasticos 5ml", price: 69, image: "../img/pipeta.jpg" },
  { id: 15, name: "Vasos medidores", price: 10, image: "../img/vasos-medidores.jpg" },
  { id: 16, name: "Guantes de látex", price: 12, image: "../img/guantes-latex.jpg" },
  { id: 17, name: "Cubrebocas KN-95", price: 10, image: "../img/termometro-digital.jpg" },
  { id: 18, name: "Tarjeta arduino", price: 150, image: "../img/arduino.jpeg" },
  { id: 19, name: "Papel bond A4", price: 2, image: "../img/papel-bond-a4.webp" },
  { id: 20, name: "Papel reciclado A4", price: 2.5, image: "../img/papel-reciclado-a4.jpg" },
  { id: 21, name: "Papel para fotocopia", price: 3, image: "../img/papel-fotocopia.webp" },
  { id: 22, name: "Bloc de notas amarillas", price: 18, image: "../img/bloc-notas.webp" },
  { id: 23, name: "Cuaderno de notas", price: 26, image: "../img/cuaderno-notas.jpg" },
  { id: 24, name: "Papel kraft en rollo", price: 10, image: "../img/papel-kraft.jpg" }
];

const productsTecnologia = [
  { id: 1, name: "Tarjeta arduino", price: 150, image: "../img/arduino.jpeg" },
  { id: 2, name: "Led de colores", price: 5, image: "../img/led.jpeg" },
  { id: 3, name: "Pilas duracel", price: 100, image: "../img/pilas.jpeg" },
  { id: 4, name: "Servo motor 99", price: 120, image: "../img/servo.jpeg" },
  { id: 5, name: "Conjunto de resistores", price: 10, image: "../img/resistor.jpeg" },
  { id: 6, name: "Pantalla LCD OLED", price: 50, image: "../img/lcd.jpeg" }
];

const placaArduino = [
  { id: 1, name: "Tarjeta arduino", price: 150, image: "../img/arduino.jpeg" }
];

const productsPlumas = [
  { id: 1, name: "Pluma azul de gel", price: 15, image: "../img/pluma-azul.jpg" },
  { id: 2, name: "Pluma roja bic", price: 18, image: "../img/pluma-roja.jpg" },
  { id: 3, name: "Pluma negra", price: 12, image: "../img/pluma-negra.png" },
  { id: 4, name: "Pluma verde marca AZOR", price: 17, image: "../img/pluma-verde.webp" },
  { id: 5, name: "Pack de plumas (10)", price: 12, image: "../img/pack-plumas.jpeg" },
  { id: 6, name: "Pluma gel vegana ", price: 25, image: "../img/pluma-gel.webp" }
];

const productsLaboratorio = [
  { id: 1, name: "Portaobjeto 1pza.", price: 150, image: "../img/microscopio.jpg" },
  { id: 2, name: "Pipeta de 5ml", price: 69, image: "../img/pipeta.jpg" },
  { id: 3, name: "Vasos medidores", price: 10, image: "../img/vasos-medidores.jpg" },
  { id: 4, name: "Guantes de látex", price: 12, image: "../img/guantes-latex.jpg" },
  { id: 5, name: "Cubrebocas KN-95", price: 10, image: "../img/termometro-digital.jpg" },
  { id: 6, name: "Placa Petri con tapa", price: 40, image: "../img/placa-petri.webp" }
];

const productsPapel = [
  { id: 1, name: "Papel bond A4", price: 2, image: "../img/papel-bond-a4.webp" },
  { id: 2, name: "Papel reciclado A4", price: 2.5, image: "../img/papel-reciclado-a4.jpg" },
  { id: 3, name: "Papel para fotocopia", price: 3, image: "../img/papel-fotocopia.webp" },
  { id: 4, name: "Bloc de notas", price: 18, image: "../img/bloc-notas.webp" },
  { id: 5, name: "Cuaderno de notas", price: 26, image: "../img/cuaderno-notas.jpg" },
  { id: 6, name: "Papel kraft en rollo", price: 10, image: "../img/papel-kraft.jpg" }
];

// Variables globales
let currentProducts = products; // Inicialmente mostramos todos los productos

// Referencias del DOM
const productList = document.getElementById('product-list');
const cartItems = document.getElementById('cart-items');
const totalPriceEl = document.getElementById('total-price');
const clearCartButton = document.getElementById('clear-cart-btn');

// Carrito
let cart = [];

// Referencias del modal
const modal = document.getElementById('product-modal');
const closeModal = document.getElementById('close-modal');
const modalTitle = document.getElementById('modal-title');
const modalPrice = document.getElementById('modal-price');
const modalImg = document.getElementById('modal-img');
const modalDescription = document.getElementById('modal-description');

// Función para renderizar productos
function renderProducts(products) {
  productList.innerHTML = ''; // Limpiar lista de productos
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" onclick="showProductDetails(${product.id})">
      <div class="card-body">
        <h5>${product.name}</h5>
        <p>$${product.price}</p>
        <button class="btn btn-primary" onclick="addToCart(${product.id})">Añadir al carrito</button>
      </div>
    `;
    productList.appendChild(productCard);
  });
}

/// Función para ordenar productos por precio
function sortProductsByPrice(order) {
  return currentProducts.slice().sort((a, b) => {
    if (order === "asc") return a.price - b.price;
    if (order === "desc") return b.price - a.price;
    return 0;
  });
}

// Evento para ordenar los productos
const sortPriceSelect = document.getElementById('sort-price');
sortPriceSelect.addEventListener('change', (e) => {
  const sortedProducts = sortProductsByPrice(e.target.value);
  renderProducts(sortedProducts); // Renderiza los productos ordenados
});

// Función de búsqueda
document.getElementById('search-input').addEventListener('input', (event) => {
  const query = event.target.value.toLowerCase();
  let filteredProducts = [];

  if (query.includes('plumas')) {
    filteredProducts = productsPlumas;
  } else if (query.includes('laboratorio')) {
    filteredProducts = productsLaboratorio;
  } else if (query.includes('papel')) {
    filteredProducts = productsPapel;
  } else if (query.includes('arduino')) {
    filteredProducts = placaArduino;
  }else {
    filteredProducts = products;
  }

  currentProducts = filteredProducts; // Guardar los productos filtrados como los actuales
  renderProducts(filteredProducts); // Renderiza los productos filtrados
});


// Función para renderizar productos
function renderProducts(products) {
  const productList = document.getElementById('product-list');
  productList.innerHTML = ''; // Limpiar lista de productos
  
  products.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('card');
    productCard.innerHTML = `
      <img src="${product.image}" alt="${product.name}" onclick="showProductDetails(${product.id})">
      <div class="card-body">
        <h5>${product.name}</h5>
        <p>$${product.price}</p>
        <button class="btn btn-primary" onclick="addToCart(${product.id})">Añadir al carrito</button>
      </div>
    `;
    productList.appendChild(productCard);
  });
}


// Mostrar detalles del producto
function showProductDetails(id) {
  const product = currentProducts.find(p => p.id === id);
  const modalTitle = document.getElementById('modal-title');
  const modalPrice = document.getElementById('modal-price');
  const modalImg = document.getElementById('modal-img');
  const modalDescription = document.getElementById('modal-description');

  modalTitle.innerText = product.name;
  modalPrice.innerText = `$${product.price}`;
  modalImg.src = product.image;
  modalDescription.innerText = `Detalles de ${product.name}: ...`;
  document.getElementById('product-modal').style.display = 'flex';
}

// Cerrar modal
document.getElementById('close-modal').addEventListener('click', () => {
  document.getElementById('product-modal').style.display = 'none';
});

// Cerrar el modal al hacer clic fuera de él (en el área borrosa)
modal.addEventListener('click', (e) => {
  if (e.target === modal) {
    modal.style.display = 'none'; // Ocultar el modal
  }
});

// Añadir producto al carrito
function addToCart(id) {
  const product = currentProducts.find(p => p.id === id);
  const cartItem = cart.find(item => item.id === id);
  if (cartItem) {
    cartItem.quantity++;
  } else {
    cart.push({ ...product, quantity: 1 });
  }
  renderCart();
}

// Renderizar carrito
function renderCart() {
  cartItems.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.quantity;
    const li = document.createElement('li');
    li.className = "d-flex justify-content-between align-items-center";
    li.innerHTML = `
      ${item.quantity} x ${item.name} - $${item.price * item.quantity}
      <button class="btn btn-sm btn-danger espacio" onclick="removeFromCart(${item.id})">X</button>
    `;
    cartItems.appendChild(li);
  });
  totalPriceEl.innerText = total.toFixed(2);
}

// Eliminar producto del carrito
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
}

// Vaciar todo el carrito
function clearCart() {
  cart = [];
  renderCart();
}

// Funcionalidad del botón para borrar todo el carrito
clearCartButton.addEventListener('click', clearCart);

// Renderizar los productos al cargar la página
renderProducts(products);

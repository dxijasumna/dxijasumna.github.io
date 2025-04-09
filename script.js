
let carrito = [];

function agregarAlCarrito(nombre, precio) {
  carrito.push({ nombre, precio });
  mostrarCarrito();
}

function mostrarCarrito() {
  const lista = document.getElementById('carrito-lista');
  const totalElem = document.getElementById('total');
  lista.innerHTML = '';
  let total = 0;
  carrito.forEach((item, index) => {
    total += item.precio;
    const li = document.createElement('li');
    li.textContent = `${item.nombre} - $${item.precio.toLocaleString()}`;
    const btn = document.createElement('button');
    btn.textContent = 'Eliminar';
    btn.onclick = () => {
      carrito.splice(index, 1);
      mostrarCarrito();
    };
    li.appendChild(btn);
    lista.appendChild(li);
  });
  totalElem.textContent = `Total: $${total.toLocaleString()}`;
}

function confirmarPedido() {
  if (carrito.length === 0) {
    alert('Tu carrito está vacío');
    return;
  }
  const resumen = carrito.map(p => `${p.nombre}: $${p.precio.toLocaleString()}`).join('%0A');
  const total = carrito.reduce((sum, p) => sum + p.precio, 0);
  const mensaje = `Hola, quiero hacer un pedido:%0A${resumen}%0ATotal: $${total.toLocaleString()}`;
  window.open(`https://wa.me/573233751250?text=${mensaje}`, '_blank');
}

document.getElementById('boton-carrito').addEventListener('click', () => {
  const carrito = document.getElementById('carrito-section');
  carrito.style.display = carrito.style.display === 'none' ? 'block' : 'none';
});

document.getElementById('confirmar-pedido').addEventListener('click', () => {
  const lista = document.querySelectorAll('#carrito-lista li');
  let mensaje = "Hola, quiero confirmar este pedido:%0A";
  lista.forEach(item => mensaje += `- ${item.textContent}%0A`);
  const total = document.getElementById('total').textContent;
  mensaje += `%0ATotal: ${total}`;
  const numero = '573001234567'; // Reemplaza por tu número real
  const url = `https://wa.me/${numero}?text=${mensaje}`;
  window.open(url, '_blank');
});

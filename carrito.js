let carrito = [];
function agregarAlCarrito(producto, precio) {
  carrito.push({ producto, precio });
  actualizarCarrito();
}
function actualizarCarrito() {
  const lista = document.getElementById("carrito");
  const total = document.getElementById("total");
  const whatsapp = document.getElementById("whatsapp");
  lista.innerHTML = "";
  let suma = 0;
  let mensaje = "Hola, quiero comprar:%0A";
  carrito.forEach((item, index) => {
    lista.innerHTML += `<li>${item.producto} - $${item.precio}</li>`;
    suma += item.precio;
    mensaje += `• ${item.producto} - $${item.precio}%0A`;
  });
  total.innerText = "Total: $" + suma;
  mensaje += `%0ATotal: $${suma}%0APagar por Nequi al 3233751250`;
  whatsapp.href = `https://wa.me/573233751250?text=${mensaje}`;
}

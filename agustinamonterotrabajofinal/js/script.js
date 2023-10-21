let carrito = [];
let total = 0;

function agregarAlCarrito(nombre, precio) {
    carrito.push({ nombre, precio });
    total += precio;
    actualizarCarrito();
}

function actualizarCarrito() {
    const carritoList = document.getElementById('carrito-list');
    const totalElement = document.getElementById('total');
    carritoList.innerHTML = '';
    carrito.forEach(item => {
        const li = document.createElement('li');
        li.innerText = `${item.nombre} - $${item.precio}`;
        carritoList.appendChild(li);
    });
    totalElement.innerText = total;
}
function procesarPago() {
    const formaPago = document.querySelector('input[name="formaPago"]:checked').value;
    
    if (formaPago === "tarjeta") {
        // Implementa la lógica de pago con tarjeta de crédito
        alert("Pagado con tarjeta de crédito. ¡Gracias por su compra!");
        vaciarCarrito(); // Limpia el carrito después del pago
    } else if (formaPago === "efectivo") {
        // Implementa la lógica de pago en efectivo
        const total = document.getElementById('total').textContent;
        alert(`Pagado en efectivo. Total: $${total}. ¡Gracias por su compra!`);
        vaciarCarrito(); // Limpia el carrito después del pago
    } else {
        alert("Seleccione una forma de pago antes de continuar.");
    }
}

function vaciarCarrito() {
    carrito = [];
    total = 0;
    actualizarCarrito();
}
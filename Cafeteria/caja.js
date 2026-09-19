
const productos = [
    { nombre: "Café americano", precio: 35 },
    { nombre: "Capuchino", precio: 55 },
    { nombre: "Pan dulce", precio: 25 },
    { nombre: "Sándwich", precio: 75 }
];

let pedidos = [];
let totalAcumulado = 0;

function mostrarProductos() {
    const contenedor = document.getElementById("productos");

    productos.forEach((producto, indice) => {
        const boton = document.createElement("button");

        boton.textContent = `${producto.nombre} - $${producto.precio}`;

        boton.onclick = function() {
            agregarPedido(indice);
        };

        contenedor.appendChild(boton);
    });
}

function agregarPedido(indice) {
    const producto = productos[indice];

    pedidos.push(producto);

    totalAcumulado += producto.precio;

    mostrarPedidos();
}

function mostrarPedidos() {
    const lista = document.getElementById("listaPedidos");

    lista.innerHTML = "";

    if (pedidos.length === 0) {
        lista.innerHTML = "<p>No hay pedidos registrados.</p>";
    }

    pedidos.forEach((pedido, indice) => {
        const elemento = document.createElement("div");

        elemento.className = "pedido";

        elemento.innerHTML = `
            <span>${indice + 1}. ${pedido.nombre} - $${pedido.precio}</span>
            <button class="eliminar" onclick="eliminarPedido(${indice})">
                Eliminar
            </button>
        `;

        lista.appendChild(elemento);
    });

    document.getElementById("total").textContent =
        `$${totalAcumulado.toFixed(2)}`;
}

function eliminarPedido(indice) {
    totalAcumulado -= pedidos[indice].precio;

    pedidos.splice(indice, 1);

    mostrarPedidos();
}

function finalizarVenta() {
    if (pedidos.length === 0) {
        document.getElementById("mensaje").textContent =
            "No hay productos en la venta.";
        return;
    }

    document.getElementById("mensaje").textContent =
        `Venta finalizada. Total: $${totalAcumulado.toFixed(2)}`;

    pedidos = [];
    totalAcumulado = 0;

    mostrarPedidos();

    document.getElementById("total").textContent = "$0.00";
}

mostrarProductos();
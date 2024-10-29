document.addEventListener("DOMContentLoaded", () => {
    const productoForm = document.getElementById("productoForm");
    const compraForm = document.getElementById("compraForm");
    const ventaForm = document.getElementById("ventaForm");
    const productosDiv = document.getElementById("productos");

    // Función para añadir un producto
    productoForm.addEventListener("submit", async (e) => {
        e.preventDefault(); // Prevenir el envío del formulario

        const nuevoProducto = {
            nombre: document.getElementById("nombre").value,
            descripcion: document.getElementById("descripcion").value,
            precio: parseFloat(document.getElementById("precio").value),
            cantidad: parseInt(document.getElementById("cantidad").value),
            categoria: document.getElementById("categoria").value,
            costo: parseFloat(document.getElementById("costo").value),
            codigoUnico: document.getElementById("codigoUnico").value,
        };

        try {
            const response = await fetch('http://localhost:5000/productos', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(nuevoProducto),
            });

            if (response.ok) {
                const producto = await response.json();
                agregarProductoALaLista(producto);
                productoForm.reset(); // Reiniciar el formulario
            } else {
                const error = await response.json();
                console.error('Error al añadir producto:', error);
            }
        } catch (error) {
            console.error('Error de conexión:', error);
        }
    });

    // Función para agregar el producto a la lista en el DOM
    function agregarProductoALaLista(producto) {
        const productoDiv = document.createElement("div");
        productoDiv.textContent = `Nombre: ${producto.nombre}, Precio: ${producto.precio}, Cantidad: ${producto.cantidad}`;
        productosDiv.appendChild(productoDiv);
    }

    // Registrar Compra
    compraForm.addEventListener("submit", async (e) => {
        e.preventDefault(); // Prevenir el envío del formulario

        const codigoCompra = document.getElementById("codigoCompra").value;
        const cantidadCompra = parseInt(document.getElementById("cantidadCompra").value);

        // Aquí iría la lógica para registrar la compra
        // const response = await fetch('http://localhost:5000/compras', { ... });
    });

    // Registrar Venta
    ventaForm.addEventListener("submit", async (e) => {
        e.preventDefault(); // Prevenir el envío del formulario

        const codigoVenta = document.getElementById("codigoVenta").value;
        const cantidadVenta = parseInt(document.getElementById("cantidadVenta").value);

        // Aquí iría la lógica para registrar la venta
        // const response = await fetch('http://localhost:5000/ventas', { ... });
    });
});

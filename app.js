const products = {
  500: { name: "Mezcla original 200g", price: 500 },
  900: { name: "Mezcla original 500g", price: 900 },
  700: { name: "Mezcla especial 200g", price: 700 },
  1200: { name: "Mezcla especial 500g", price: 1200 },
};

const compras = [];

function add() {
  var productoId = parseInt(document.getElementById("product").value);
  var cantidad = parseInt(document.getElementById("number").value);

  if (productoId !== 0 && cantidad > 0) {
    const producto = products[productoId];
    if (producto) {
      compras.push({ id: productoId, name: producto.name, price: producto.price, cantidad: cantidad });
      alert("Producto agregado al carrito.");

      document.getElementById("product").selectedIndex = 0;
      document.getElementById("number").value = "";
    } else {
      alert("El producto seleccionado no existe.");
    }
  } else {
    alert("Por favor, seleccione un producto y una cantidad válida.");
  }
}


function display() {
  var contenido = "Carrito de compras:\n";
  var total = 0;

  var productoId = parseInt(document.getElementById("product").value);
  var cantidad = parseInt(document.getElementById("number").value);

  for (var i = 0; i < compras.length; i++) {
    var item = compras[i];
    var subtotal = item.price * item.cantidad;
    total += subtotal;

    contenido += `${item.name} x${item.cantidad}: $${subtotal}\n`;
  }

  contenido += `Producto seleccionado: ${products[productoId].name} x${cantidad}: $${products[productoId].price * cantidad}\n`;
  contenido += `Importe total: $${total}`;

  alert(contenido);
}

      

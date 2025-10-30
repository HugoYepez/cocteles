const numeroWhatsApp = "593993367095"; // Tu número con código país, sin + ni espacios

function abrirSeccion(url) {
  if (url) window.open(url, "_blank");
}

function comprarCoctelEmoji(nombre, inputId) {
  const input = document.getElementById(inputId);
  if (!input) {
    alert("No se encontró el campo de cantidad.");
    return;
  }

  const cantidad = parseInt(input.value);
  if (isNaN(cantidad) || cantidad < 1 || cantidad > 100) {
    alert("Por favor, selecciona una cantidad entre 1 y 100.");
    return;
  }

  const mensaje = `Hola 👋, quiero pedir ${cantidad} coctel🍹 de ${nombre} de Maison Frenchie Cocktail 🍸`;
  
  // Creamos la URL correctamente codificada
  const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(mensaje)}`;

  // Abrimos en una nueva ventana
  window.open(url, "_blank");
}


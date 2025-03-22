// Botón de suscripción
document.getElementById("subscribe-btn").addEventListener("click", function() {
    alert("¡Gracias por suscribirte!");
});

// Mostrar / Ocultar juegos
document.getElementById("juegos-btn").addEventListener("click", function() {
    document.getElementById("juegos-lista").classList.toggle("oculto");
});

// Botón de suscripción
document.getElementById("subscribe-btn").addEventListener("click", function() {
    alert("¡Gracias por suscribirte!");
});

// Mostrar / Ocultar juegos
document.getElementById("juegos-btn").addEventListener("click", function() {
    let juegosLista = document.getElementById("juegos-lista");
    if (juegosLista.style.display === "none" || juegosLista.style.display === "") {
        juegosLista.style.display = "block";
    } else {
        juegosLista.style.display = "none";
    }
});

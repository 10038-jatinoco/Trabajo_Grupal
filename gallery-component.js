document.addEventListener('DOMContentLoaded', function () {
    const imagenPrincipal = document.getElementById('imagen-principal');
    const botonAnterior = document.getElementById('boton-anterior');
    const botonSiguiente = document.getElementById('boton-siguiente');
    const contenedorMiniaturas = document.getElementById('contenedor-miniaturas');

    const imagenes = [
        'imagenes/Honda_Rojo.jpg',
        'imagenes/Mazda_negro.jpg',
        'imagenes/Mazda.jpg',
        'imagenes/toyota_celeste.jpg',
        'imagenes/toyota_negro.jpg',
        'imagenes/Toyota.jpg',
    ];

    let indiceActual = 0;

    function actualizarGaleria() {
        imagenPrincipal.src = imagenes[indiceActual];
        resaltarMiniatura();
    }

    function resaltarMiniatura() {
        const miniaturas = document.querySelectorAll('.miniatura');
        miniaturas.forEach((miniatura, indice) => {
            miniatura.style.border = indice === indiceActual ? '2px solid #4CAF50' : 'none';
        });
    }

    function mostrarImagenAnterior() {
        indiceActual = (indiceActual - 1 + imagenes.length) % imagenes.length;
        actualizarGaleria();
    }

    function mostrarImagenSiguiente() {
        indiceActual = (indiceActual + 1) % imagenes.length;
        actualizarGaleria();
    }

    function alHacerClicEnMiniatura(indice) {
        indiceActual = indice;
        actualizarGaleria();
    }

    botonAnterior.addEventListener('click', mostrarImagenAnterior);
    botonSiguiente.addEventListener('click', mostrarImagenSiguiente);

    // Crear elementos de miniaturas
    imagenes.forEach((imagen, indice) => {
        const miniatura = document.createElement('div');
        miniatura.className = 'miniatura';
        miniatura.style.backgroundImage = `url(${imagen})`;
        miniatura.addEventListener('click', () => alHacerClicEnMiniatura(indice));
        contenedorMiniaturas.appendChild(miniatura);
    });

    // Configuración inicial de la galería
    actualizarGaleria();
});

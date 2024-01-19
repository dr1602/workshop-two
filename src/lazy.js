// Crear una funcion registrar imagen

const isIntersecting = (entry) => {
    // se puede hacer cosas como si a 200px lejos de la pantalla haz --x o y
    return entry.isIntersecting // true si está dentro de la pantalla.
}

const loadImage = (entry) => {
    const container = entry.target; // container (Div)
    const imagen = container.querySelector('img');
    const url = imagen.dataset.src;
    // cargar imagen
    imagen.src = url;

    // debugger;

    // console.log(container.nodeName);

    // deja de escuchar a la imagen, una vez que ya te has accionado.

    // una opcion es que la accion sea:
    // imagen.src = `https://randomfox.ca/images/${random()}.jpg`

    observer.unobserve(container)

}

const observer = new IntersectionObserver((entries) => {
    entries
        .filter(isIntersecting)
        .forEach(loadImage)
})

export const registerImage = (container) => {
    // Intersection Observer -> observer(imagen)
    observer.observe(container);
}
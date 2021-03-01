/*
    Los atributos de elementos representan:
        -src: Dirección a la imagen
        -active: Si la imagen es la que empieza
        -alt (opcional): Texto alternativo de la imagen
        -header (opcional): El título que va a estar sobre la imagen
        -text (opcional): El texto que va a estar sobre la imagen.
 */
export function implementCarousel(carousel, elements){
    const itemContainer = document.createElement("div");
    itemContainer.classList.add("carousel-inner");

    elements.forEach(function (element) {
        const item = document.createElement("div");
        item.classList.add("carousel-item");
        if (element.active){
            item.classList.add("active");
        }

        const image = document.createElement("img");
        image.classList.add("d-block", "w-100");
        image.src = element.src;
        if (element.alt){
            image.alt = element.alt;
        }
        item.appendChild(image);

        const captionContainer = document.createElement("div");
        captionContainer.classList.add("carousel-caption");
        item.appendChild(captionContainer)

        if (element.header){
            const header = document.createElement("h2");
            header.innerText = element.header;
            captionContainer.appendChild(header);
        }

        if (element.text){
            const text = document.createElement("p");
            text.innerText = element.text;
            captionContainer.appendChild(text);
        }

        itemContainer.appendChild(item);
    })

    carousel.appendChild(itemContainer);
}




/*
    <div class="carousel-inner">
        <div class="carousel-item active">
            <img class="d-block w-100" src="../src/assets/img/Gato%20con%20Lentes.jpg" alt="First slide">
        </div>
        <div class="carousel-item">
            <img class="d-block w-100" src="../src/assets/img/Gato%20con%20Lentes.jpg" alt="Second slide">
        </div>

    </div>
 */
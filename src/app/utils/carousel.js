/*
    Los atributos de elementos representan:
        -src: Dirección a la imagen
        -active: Si la imagen es la que empieza
        -alt (opcional): Texto alternativo de la imagen
        -header (opcional): El título que va a estar sobre la imagen
        -text (opcional): El texto que va a estar sobre la imagen.
 */
export function implementCarousel(carousel, elements){

    const customID = "customCarouselID";
    const customReference = "#" + customID;
    carousel.id = customID;

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
            if (element.dark){
                header.classList.add("text-dark")
            }
            captionContainer.appendChild(header);
        }

        if (element.text){
            const text = document.createElement("p");
            text.innerText = element.text;
            captionContainer.appendChild(text);
            if (element.dark){
                text.classList.add("text-dark")
            }
        }

        itemContainer.appendChild(item);
    })

    // Hago el botón para volver de imagen.
    const previousButton = document.createElement("button");
    previousButton.classList.add("carousel-control-prev");
    previousButton.type = "button";
    previousButton.setAttribute("data-bs-target", customReference);
    previousButton.setAttribute("data-bs-slide", "prev");

    const previousSymbol = document.createElement("span");
    previousSymbol.classList.add("carousel-control-prev-icon");
    previousSymbol.setAttribute("aria-hidden", "true");
    previousButton.appendChild(previousSymbol);


    // Hago el botón para cambiar de imagen.
    const nextButton = document.createElement("button");
    nextButton.classList.add("carousel-control-next");
    nextButton.type = "button";
    nextButton.setAttribute("data-bs-target", customReference);
    nextButton.setAttribute("data-bs-slide", "next");

    const nextSymbol = document.createElement("span");
    nextSymbol.classList.add("carousel-control-next-icon");
    nextSymbol.setAttribute("aria-hidden", "true");
    nextButton.appendChild(nextSymbol);

    carousel.appendChild(itemContainer);
    carousel.appendChild(previousButton);
    carousel.appendChild(nextButton);
}
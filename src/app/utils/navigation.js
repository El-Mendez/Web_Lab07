import {destinations} from "./destinations.js"
import {brandName} from "./constants";

export function implementNavigationBar(nav) {

    const container = document.createElement("div");
    container.classList.add("container-fluid");

    const brandItem = document.createElement("a");
    brandItem.classList.add("navbar-brand");
    brandItem.href = "index.html";
    brandItem.innerText = brandName;
    container.appendChild(brandItem);

    /*
    const toggler = document.createElement("button");
    toggler.class = "navbar-toggler";
    toggler.type = "button";
    // Todo implementar todo lo del toggle que no tengo idea de cómo hacerlo con JS
    //<button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    const togglerIcon = document.createElement("span");
    togglerIcon.class = "navbar-toggler-icon";
    toggler.appendChild(togglerIcon);
    toggler.appendChild(container);
     */

    const elementsListContainer = document.createElement("div");
    elementsListContainer.classList.add("collapse", "navbar-collapse");
    elementsListContainer.id = "navbarNav";
    container.appendChild(elementsListContainer);

    const elementList = document.createElement("ul");
    elementList.classList.add("navbar-nav");
    createDestinations(elementList);
    elementsListContainer.appendChild(elementList);

    nav.appendChild(container);
}

function createDestinations(destinationList) {
    for(let i = 0; i < destinations.length; i++) {
        const destination = destinations[i];

        let element = document.createElement("li");
        element.classList.add("nav-item");

        let reference = document.createElement("a");
        reference.classList.add("nav-link");
        reference.innerText = destination.name;
        reference.href = destination.reference;

        element.appendChild(reference);
        destinationList.appendChild(element);
    }
}

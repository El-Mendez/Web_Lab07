import {destinations} from "./destinations.js"
import {brandName} from "./constants";
import Popover from "bootstrap/js/src/popover";
import "bootstrap/dist/js/bootstrap";

export function implementNavigationBar(nav, current) {

    const controllerId = "navBarContent";

    const brandItem = document.createElement("a");
    brandItem.classList.add("navbar-brand");
    brandItem.href = "index.html";
    brandItem.innerText = brandName;
    nav.appendChild(brandItem);


    const toggler = document.createElement("button");
    toggler.classList.add("navbar-toggler");
    toggler.type = "button";
    toggler.setAttribute("data-bs-toggle", "collapse");
    toggler.setAttribute("data-bs-target", "#"+controllerId);
    toggler.setAttribute("aria-controls", controllerId);
    toggler.setAttribute("aria-expanded", "false");
    toggler.setAttribute("aria-label", "Toggle Navigation");

    const togglerIcon = document.createElement("span");
    togglerIcon.classList.add("navbar-toggler-icon");
    toggler.appendChild(togglerIcon);
    nav.appendChild(toggler);


    const elementsListContainer = document.createElement("div");
    elementsListContainer.classList.add("collapse", "navbar-collapse");
    elementsListContainer.id = controllerId;
    nav.appendChild(elementsListContainer);

    const elementList = document.createElement("ul");
    elementList.classList.add("navbar-nav");
    createDestinations(elementList, current);
    elementsListContainer.appendChild(elementList);

    const muteButton = document.createElement("a");
    muteButton.tabIndex = "0";
    muteButton.classList.add("btn", "btn-lg", "btn-danger")
    muteButton.role = "button";
    muteButton.setAttribute("data-bs-toggle", "popover");
    muteButton.setAttribute("data-bs-trigger", "focus");
    muteButton.setAttribute("data-bs-content", "No puedes mutearme >:D");
    elementsListContainer.appendChild(muteButton);
    muteButton.innerText = "mute";

    // Para que el botón de mute funcione
    const popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'))
    const popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
        return new Popover(popoverTriggerEl)
    })

    // Esto es solo para probar si los pollyfills funcionan
    "   Cómo le va Ludwing? xd".trimStart();
}

function createDestinations(destinationList, current) {
    for(let i = 0; i < destinations.length; i++) {
        const destination = destinations[i];

        let element = document.createElement("li");
        element.classList.add("nav-item");

        let reference = document.createElement("a");
        reference.classList.add("nav-link");
        if (destination.reference === current){
            reference.classList.add("active");
        }
        reference.innerText = destination.name;
        reference.href = destination.reference;

        element.appendChild(reference);
        destinationList.appendChild(element);
    }
}

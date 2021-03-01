import {destinations} from "./destinations.js"
import {brandName} from "./constants";
import '../../../node_modules/bootstrap/dist/js/bootstrap.js';

export function implementNavigationBar(nav) {

    const controllerId = "navBarContent";

    const brandItem = document.createElement("a");
    brandItem.classList.add("navbar-brand");
    brandItem.href = "index.html";
    brandItem.innerText = brandName;
    nav.appendChild(brandItem);


    const toggler = document.createElement("button");
    toggler.classList.add("navbar-toggler");
    toggler.type = "button";
    toggler.setAttribute("data-toggle", "collapse");
    toggler.setAttribute("data-target", "#"+controllerId);
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
    createDestinations(elementList);
    elementsListContainer.appendChild(elementList);
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

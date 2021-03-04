"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.implementNavigationBar = implementNavigationBar;

var _destinations = require("./destinations.js");

var _constants = require("./constants");

var _popover = _interopRequireDefault(require("bootstrap/js/src/popover"));

require("bootstrap/dist/js/bootstrap");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function implementNavigationBar(nav, current) {
  var controllerId = "navBarContent";
  var brandItem = document.createElement("a");
  brandItem.classList.add("navbar-brand");
  brandItem.href = "index.html";
  brandItem.innerText = _constants.brandName;
  nav.appendChild(brandItem);
  var toggler = document.createElement("button");
  toggler.classList.add("navbar-toggler");
  toggler.type = "button";
  toggler.setAttribute("data-bs-toggle", "collapse");
  toggler.setAttribute("data-bs-target", "#" + controllerId);
  toggler.setAttribute("aria-controls", controllerId);
  toggler.setAttribute("aria-expanded", "false");
  toggler.setAttribute("aria-label", "Toggle Navigation");
  var togglerIcon = document.createElement("span");
  togglerIcon.classList.add("navbar-toggler-icon");
  toggler.appendChild(togglerIcon);
  nav.appendChild(toggler);
  var elementsListContainer = document.createElement("div");
  elementsListContainer.classList.add("collapse", "navbar-collapse");
  elementsListContainer.id = controllerId;
  nav.appendChild(elementsListContainer);
  var elementList = document.createElement("ul");
  elementList.classList.add("navbar-nav");
  createDestinations(elementList, current);
  elementsListContainer.appendChild(elementList);
  var muteButton = document.createElement("a");
  muteButton.tabIndex = "0";
  muteButton.classList.add("btn", "btn-lg", "btn-danger");
  muteButton.role = "button";
  muteButton.setAttribute("data-bs-toggle", "popover");
  muteButton.setAttribute("data-bs-trigger", "focus");
  muteButton.setAttribute("data-bs-content", "No puedes mutearme >:D");
  elementsListContainer.appendChild(muteButton);
  muteButton.innerText = "mute"; // Para que el botón de mute funcione

  var popoverTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]'));
  var popoverList = popoverTriggerList.map(function (popoverTriggerEl) {
    return new _popover["default"](popoverTriggerEl);
  });
}

function createDestinations(destinationList, current) {
  for (var i = 0; i < _destinations.destinations.length; i++) {
    var destination = _destinations.destinations[i];
    var element = document.createElement("li");
    element.classList.add("nav-item");
    var reference = document.createElement("a");
    reference.classList.add("nav-link");

    if (destination.reference === current) {
      reference.classList.add("active");
    }

    reference.innerText = destination.name;
    reference.href = destination.reference;
    element.appendChild(reference);
    destinationList.appendChild(element);
  }
}

import "./jumbotron.scss";

export function implementFooter() {
    const jumbotron = document.createElement("div");
    jumbotron.classList.add("col-12", "jumbotron", "fixed-bottom");
    const text = document.createElement("p");
    text.innerText = "Méndez™ apellido registrado cuando nací.";
    jumbotron.appendChild(text);
    document.body.appendChild(jumbotron);
}

export function implementFooter(footer) {
    footer.classList.add("container-fluid", "padding");

    const container = document.createElement("div");
    container.classList.add("row", "text-center", "padding");
    footer.appendChild(container);

    const personalData = document.createElement("div");
    personalData.classList.add("col-md-4", "col-sm-6");
    addFooterContent(personalData, "Méndez", [
        "Pablo Méndez",
        "men19195@uvg.edu.gt",
        "Guatemala, Guatemala",
    ]);
    container.appendChild(personalData);

    const horarios = document.createElement("div");
    horarios.classList.add("col-md-4", "col-sm-6");
    addFooterContent(horarios, "Horarios", [
        "Lunes a Jueves: 10am - 2am",
        "Viernes: 7am - 12am",
        "Sábados: 9am - 12am",
        "Domingos: 10am - 3am",
    ]);
    container.appendChild(horarios);

    const bootstrap = document.createElement("div");
    bootstrap.classList.add("col-md-4", "col-sm-12");
    addFooterContent(bootstrap, "Bootstrap", [
        "Elegante",
        "Completo",
        "Fácil",
        "Conveniente",
    ]);
    container.appendChild(bootstrap);

    const division = document.createElement("hr");
    division.classList.add("light", "col-11");
    container.appendChild(division);
    const copyRight = document.createElement("p");
    copyRight.classList.add("text-center", "col-12");
    copyRight.innerText = "Méndez, apellido registrado cuando nací";
    container.appendChild(copyRight);
}

function addFooterContent(container, titleText, texts){
    addHorizontalLine(container);
    const title = document.createElement("h3");
    title.innerText = titleText;
    container.appendChild(title);
    addHorizontalLine(container);

    texts.forEach(texto => addParagraphLine(container, texto));
}

function addHorizontalLine(container){
    const line = document.createElement("hr");
    line.classList.add("light");
    container.appendChild(line);
}

function addParagraphLine(container, text){
    const paragraph = document.createElement("p");
    paragraph.innerText = text;
    container.appendChild(paragraph);
}

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
    addFooterContent(bootstrap, "Horarios", [
        "Elegante",
        "Completo",
        "Fácil",
        "Conveniente",
    ]);
    container.appendChild(bootstrap);
}

function addFooterContent(container, titleText, texts){
    addHorizontalLine(container);
    const title = document.createElement("h2");
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

/*

    <div class="container-fluid padding">
        <div class="row text-center padding">
            <div class="col-md-4 col-sm-6">
                <hr class="light">
                <h1>Méndez</h1>
                <hr class="light">
                <p>Pablo Méndez</p>
                <p>men19195@uvg.edu.gt</p>
                <p>Guatemala, Guatemala</p>
            </div>
            <div class="col-md-4 col-sm-6">
                <hr class="light">
                <h1>Horarios</h1>
                <hr class="light">
                <p>Lunes a Jueves: 10am - 2am</p>
                <p>Viernes: 7am - 12am</p>
                <p>Sábados: 9am - 12am</p>
                <p>Sábados: 10am - 3am</p>
            </div>
            <div class="col-md-4 col-sm-12">
                <hr class="light">
                <h1>Bootstrap</h1>
                <hr class="light">
                <p>Elegante</p>
                <p>Fácil</p>
                <p>Conveniente</p>
                <p>Completo</p>
            </div>
        </div>
    </div>

 */
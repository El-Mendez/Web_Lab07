import "./main.scss"
import {implementNavigationBar} from "../utils/navigation";
import {implementFooter} from "../utils/footer";
import {implementCarousel} from "../utils/carousel"
import gato from "../../assets/img/Gato con Lentes.jpg";

const navigationBar = document.getElementById("navigationBar");
implementNavigationBar(navigationBar);

const elegantFooter = document.getElementById("elegant-footer");
implementFooter(elegantFooter);

const carousel = document.getElementById("imageCarousel");
implementCarousel(carousel,
    [
        {
            src: gato,
            active: true,
            alt: "Imagen de un gato con lentes",
            header: "Título",
            text: "Esto es un texto"
        }
    ]);
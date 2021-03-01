import "./main.scss"
import gato from "../../assets/img/Gato con Lentes.jpg";
import zum from "../../assets/img/Zum.png";
import {implementNavigationBar} from "../utils/navigation";
import {implementFooter} from "../utils/footer";
import {implementCarousel} from "../utils/carousel";

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
        },
        {
            src: zum,
            active: false,
            alt: "Imagen de Zum",
            header: "Título Zum",
            text: "Esto es un texto de Zum"
        }
    ]);
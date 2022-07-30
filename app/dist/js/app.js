import { NegociacaoControler } from "./controllers/NegociacaoController.js";
const controller = new NegociacaoControler();
const form = document.querySelector(".form");
if (form) {
    form.addEventListener("submit", event => {
        event.preventDefault();
        controller.adiciona();
    });
}
else
    throw Error("Não foi possível iniciar a aplicação. Verifique se form existe.");

// # js-array-carousel

// - Creare contenuto principale di index.html
//     - Creare CSS rules 
//     - Creare il contenitore con img
//     - Assegnare i classi al contenuto
//     - Aggiungere le frecce al contenitore

// - Variabili 

const carouselBoxDOMElement = document.querySelector(".carousel-box");

// - Creare imageDateBase
const imageDateBase = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp",
]
// - Creare un ciclo for con quale andiamo inserire nuovi tag img con il src di imagine che ci interessa

let lengthImageDateBase = imageDateBase.length;
for (let i = 0; i < lengthImageDateBase; i++ ){
    carouselBoxDOMElement.innerHTML += `
        <img 
            class="img-fluid rounded d-none"
            src=${imageDateBase[i]}
        >
    `;
}



// - Creare un evento click per andare a sinistra assegnando il classe active alla imagina succesivva e togliendo il classe dal img attuale
// - Creare un evento click per andare a destra assegnando il classe active alla imagina precedebnte attuale

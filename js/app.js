// # js-array-carousel

// - Creare contenuto principale di index.html
//     - Creare CSS rules 
//     - Creare il contenitore con img
//     - Assegnare i classi al contenuto
//     - Aggiungere le frecce al contenitore

// - Variabili 

const carouselBoxDOMElement = document.querySelector(".carousel-box");
const carouselBoxMiniDOMElement = document.querySelector(".carousel-box-mini");

// - Creare imageDateBase
const imageDateBase = [
    "./img/01.webp",
    "./img/02.webp",
    "./img/03.webp",
    "./img/04.webp",
    "./img/05.webp",
]
// - Creare un ciclo for con quale andiamo inserire nuovi tag img con il src di imagine che ci interessa

// - Calcolo della lunghezza di imageDateBase
let lengthImageDateBase = imageDateBase.length;

// - Ciclo for per aggiungere le imagine dento html
const classDnone = "d-none";
const classActive = "active";
for (let i = 0; i < lengthImageDateBase; i++ ){
    if (i == 0){
        carouselBoxDOMElement.innerHTML += `
            <img 
                class="image-carousel ${classActive}"
                src=${imageDateBase[i]}
            >
        `;
        carouselBoxMiniDOMElement.innerHTML += `
            <img 
                class="image-carousel-mini"
                src=${imageDateBase[i]}
            >
        `;
    } else {
        carouselBoxDOMElement.innerHTML += `
            <img 
                class="image-carousel ${classDnone}"
                src=${imageDateBase[i]}
            >
        `;
        carouselBoxMiniDOMElement.innerHTML += `
            <img 
                class="image-carousel-mini"
                src=${imageDateBase[i]}
            >
        `;
    }
}

// - Creamo DOM Element come array per i nostri imagine
let imagesDOMElement = document.querySelectorAll(".image-carousel")
let imagesMiniDOMElement = document.querySelectorAll(".image-carousel-mini")
let lengthImagesDOMElement = imagesDOMElement.length;

// - Creare un evento click per andare a destra o a sinistra assegnando il classe active img 

    // - Creamo DOM Element per i arrow
    const arrowDownDOMElement = document.getElementById("arrow-down");
    const arrowUpDOMElement = document.getElementById("arrow-up");

    // - Assegnamo l'indice della foto iniziale
    let indexCurrentImage = 0;

    // - Aggiungiamo class active a image-carousel-mini in base al indice della foto principale
    imagesMiniDOMElement[indexCurrentImage].classList.add("active");

    // - Evento click per andare avanti 
    arrowDownDOMElement.addEventListener("click", function(){
        
        // - Dichiariamo la variabile per l'indice della img succesiva
        let indexNextImage = indexCurrentImage + 1;

        // - Controlliamo se current img è l'ultima sulla database l'indice della img succesiva deve essere 0 quindi partire dall'inizio.
        if (indexCurrentImage == (lengthImageDateBase - 1)){
            indexNextImage = 0;
        } 

        // - Togliamo/Aggiungiamo i classi a img corrente        
        imagesDOMElement[indexCurrentImage].classList.remove("active")
        imagesDOMElement[indexCurrentImage].classList.add("d-none")
        imagesMiniDOMElement[indexCurrentImage].classList.remove("active")

        // - Togliamo/Aggiungiamo i classi a img successiva  
        imagesDOMElement[indexNextImage].classList.add("active")
        imagesDOMElement[indexNextImage].classList.remove("d-none")
        imagesMiniDOMElement[indexNextImage].classList.add("active")
        
        // - Controliamo se indice della img corrente è ultimo allore deve partire da capo altrimenti viene incrementato di 1
        if (indexCurrentImage == (lengthImagesDOMElement - 1)){
            indexCurrentImage = 0;
        } else {
            indexCurrentImage++;
        }
    })

    // - Evento click per andare indietro
    arrowUpDOMElement.addEventListener("click", function(){

        // - Dichiariamo la variabile per l'indice della img precedente
        let indexBeforeImage;
        if (indexCurrentImage == 0){
            indexBeforeImage = lengthImagesDOMElement - 1
        } else {
            indexBeforeImage = indexCurrentImage - 1;
        }

        // - Togliamo/Aggiungiamo i classi a img corrente        
        imagesDOMElement[indexCurrentImage].classList.remove("active")
        imagesDOMElement[indexCurrentImage].classList.add("d-none")
        imagesMiniDOMElement[indexCurrentImage].classList.remove("active")

        // - Togliamo/Aggiungiamo i classi a img precedente 
        imagesDOMElement[indexBeforeImage].classList.add("active")
        imagesDOMElement[indexBeforeImage].classList.remove("d-none")
        imagesMiniDOMElement[indexBeforeImage].classList.add("active")
         
        // - Controliamo se indice della img corrente è 0 allore deve partire da ultimo indice altimenti indice della img corrente decrementa di 1
        if(indexCurrentImage == 0){
            indexCurrentImage = lengthImagesDOMElement -1;
        } else {
            indexCurrentImage--;
        }
    })
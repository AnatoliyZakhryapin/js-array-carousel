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
const classActive = "active"; // - classe active che ha dispay block

for (let i = 0; i < lengthImageDateBase; i++) {
    const html = `
           <img 
               class="image-carousel"
                 src=${imageDateBase[i]}
            >
        `; // - constanta con il html da creare per carousel grande
    const htmlMini = `
        <img 
            class="image-carousel-mini"
            src=${imageDateBase[i]}
        >   
    `; // - constanta con il html da creare per carousel mini
    carouselBoxDOMElement.innerHTML += html;
    carouselBoxMiniDOMElement.innerHTML += htmlMini;

    // if (i == 0){
    //     const html = `
    //         <img 
    //             class="image-carousel ${classActive}"
    //             src=${imageDateBase[i]}
    //         >
    //     `; // - constanta con il html da creare per carousel grande
    //     const htmlMini = `
    //         <img 
    //             class="image-carousel-mini"
    //             src=${imageDateBase[i]}
    //         >
    //     `; // - constanta con il html da creare per carousel mini
    //     carouselBoxDOMElement.innerHTML += html;
    //     carouselBoxMiniDOMElement.innerHTML += htmlMini;
    //     // - assegna bg image per la prima foto
    //     carouselBoxDOMElement.classList.add(`bg-img-${i}`)    
    // } else {
    //     const html = `
    //         <img 
    //             class="image-carousel"
    //             src=${imageDateBase[i]}
    //         >
    //     `; // - constanta con il html da creare per carousel grande
    //     const htmlMini = `
    //         <img 
    //             class="image-carousel-mini"
    //             src=${imageDateBase[i]}
    //         >   
    //     `; // - constanta con il html da creare per carousel mini
    //     carouselBoxDOMElement.innerHTML += html;
    //     carouselBoxMiniDOMElement.innerHTML += htmlMini;
    // }
}

// - Creamo DOM Element come array per i nostri imagine
let imagesDOMElement = document.querySelectorAll(".image-carousel")
let imagesMiniDOMElement = document.querySelectorAll(".image-carousel-mini")
let lengthImagesDOMElement = imagesDOMElement.length;
let lengthImagesMiniDOMElement = imagesMiniDOMElement.length;

// - Creare un evento click per andare a destra o a sinistra assegnando il classe active img 

// - Creamo DOM Element per i arrow
const arrowDownDOMElement = document.getElementsByClassName("arrow-down");
const arrowUpDOMElement = document.getElementsByClassName("arrow-up");
const lengthArrowDownDOMElement = arrowDownDOMElement.length;
const lengthArrowUpDOMElement = arrowUpDOMElement.length;

// - Assegnamo l'indice della foto iniziale
let indexCurrentImage = 0;

// - Aggiungiamo class active a image-carousel e image-carousel-mini in base al indice della foto principale
imagesDOMElement[indexCurrentImage].classList.add("active");
imagesMiniDOMElement[indexCurrentImage].classList.add("active");
// - Aggiungiamo bg image alla prima imagine utilizzandao indice della imagine corrente 
carouselBoxDOMElement.classList.add(`bg-img-${indexCurrentImage}`)

// - Ciclo for con evento click per andare avanti 
for (let i = 0; i < lengthArrowDownDOMElement; i++) {
    arrowDownDOMElement[i].addEventListener("click", function () {
        console.log("currente inizio click  su btn", indexCurrentImage)
        // - Dichiariamo la variabile per l'indice della img succesiva
        let indexNextImage = indexCurrentImage + 1;

        // - Controlliamo se current img è l'ultima sulla database l'indice della img succesiva deve essere 0 quindi partire dall'inizio.
        if (indexCurrentImage == (lengthImageDateBase - 1)) {
            indexNextImage = 0;
        }

        // - Togliamo/Aggiungiamo i classi a img corrente        
        imagesDOMElement[indexCurrentImage].classList.remove("active")

        // imagesDOMElement[indexCurrentImage].classList.add("d-none")
        imagesMiniDOMElement[indexCurrentImage].classList.remove("active")
        carouselBoxDOMElement.classList.remove(`bg-img-${indexCurrentImage}`)

        // - Togliamo/Aggiungiamo i classi a img successiva  
        imagesDOMElement[indexNextImage].classList.add("active")
        // imagesDOMElement[indexNextImage].classList.remove("d-none")
        imagesMiniDOMElement[indexNextImage].classList.add("active")
        carouselBoxDOMElement.classList.add(`bg-img-${indexNextImage}`)


        // - Controliamo se indice della img corrente è ultimo allore deve partire da capo altrimenti viene incrementato di 1
        if (indexCurrentImage === (lengthImagesDOMElement - 1)) {
            indexCurrentImage = 0;
        } else {
            indexCurrentImage++;
        }
        console.log("next dopo click  su btn", indexNextImage)
        console.log("currente dopo click  su btn", indexCurrentImage)
    })
}


// - Ciclo for con evento click per andare indietro
for (let i = 0; i < lengthArrowUpDOMElement; i++) {
    arrowUpDOMElement[i].addEventListener("click", function () {
        console.log("currente inizio click  su btn", indexCurrentImage)

        // - Dichiariamo la variabile per l'indice della img precedente
        let indexBeforeImage;
        if (indexCurrentImage == 0) {
            indexBeforeImage = lengthImagesDOMElement - 1
        } else {
            indexBeforeImage = indexCurrentImage - 1;
        }

        // - Togliamo/Aggiungiamo i classi a img corrente        
        imagesDOMElement[indexCurrentImage].classList.remove("active")

        // imagesDOMElement[indexCurrentImage].classList.add("d-none")
        imagesMiniDOMElement[indexCurrentImage].classList.remove("active")
        carouselBoxDOMElement.classList.remove(`bg-img-${indexCurrentImage}`)

        // - Togliamo/Aggiungiamo i classi a img precedente 
        imagesDOMElement[indexBeforeImage].classList.add("active")

        // imagesDOMElement[indexBeforeImage].classList.remove("d-none")
        imagesMiniDOMElement[indexBeforeImage].classList.add("active")
        carouselBoxDOMElement.classList.add(`bg-img-${indexBeforeImage}`)

        // - Controliamo se indice della img corrente è 0 allore deve partire da ultimo indice altimenti indice della img corrente decrementa di 1
        if (indexCurrentImage == 0) {
            indexCurrentImage = lengthImagesDOMElement - 1;
        } else {
            indexCurrentImage--;
        }

        console.log("before dopo click  su btn", indexBeforeImage)
        console.log("currente dopo click  su btn", indexCurrentImage)
    })

}

// - Ciclo for con evento click per cambiare image in base a immagine cliccata

// - Ciclo FOR
for (let s = 0; s < lengthImagesMiniDOMElement; s++) {
    imagesMiniDOMElement[s].addEventListener("click", function () {
        // - Index della immagine cliccata precedentemente
        let indexBeforeImage = indexCurrentImage;
        console.log("currente inizio click  su image", indexCurrentImage)
        console.log("before inizio click  su image", indexBeforeImage)

        // - Dichiariamo la variabile per l'indice della img cliccata
        let indexClickImage = s;
        console.log("clIck dopo click", indexClickImage)

        // - Togliamo i classi a img precedente       
        imagesDOMElement[indexBeforeImage].classList.remove("active")

        // imagesDOMElement[indexCurrentImage].classList.add("d-none")
        imagesMiniDOMElement[indexBeforeImage].classList.remove("active")
        carouselBoxDOMElement.classList.remove(`bg-img-${indexBeforeImage}`)

        // - Aggiungiamo i classi a img cliccata
        imagesDOMElement[indexClickImage].classList.add("active")

        // imagesDOMElement[indexNextImage].classList.remove("d-none")
        imagesMiniDOMElement[indexClickImage].classList.add("active")
        carouselBoxDOMElement.classList.add(`bg-img-${indexClickImage}`)

        // - Assegnamo il nuovo valore di current image
        indexBeforeImage = indexClickImage;
        indexCurrentImage = indexClickImage;
        console.log("before dopo click  su image", indexBeforeImage)
        console.log("currente dopo click  su image", indexCurrentImage)
    })
}
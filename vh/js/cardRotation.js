/*  Created by Naveen Pantra on Feb, 2018 */
console.log("javaScript");

let controller = (function() {
    // DOM strings (For some easy access)
    let DOMStrings = {
        login: '.btn-log',
        register: '.btn-reg',
        cardSideFront: '.card__side-front',
        cardSideBack: '.card__side-back'
    };

    // Event Listeners to rotate cards
    let setupEventListeners = () => {
        console.log("setting up event listeners");
        document.querySelector(DOMStrings.login).addEventListener('click', rotateFront);
        document.querySelector(DOMStrings.register).addEventListener('click', rotateBack);
        console.log("Event listeners setting up done");
    };

    // Callback functions to rotate cards
    // For rotation on Login button on register page.
    let rotateFront = () => {
        console.log("front-log");
        document.querySelector(DOMStrings.cardSideFront).classList.toggle("rotateBack");
        document.querySelector(DOMStrings.cardSideFront).classList.toggle("hide");
        document.querySelector(DOMStrings.cardSideBack).classList.toggle("hide");
        document.querySelector(DOMStrings.cardSideBack).classList.toggle("rotateFront");
    };

    // For rotation on Register button on Login Page
    let rotateBack = () => {
        console.log("back-reg");
        document.querySelector(DOMStrings.cardSideBack).classList.toggle("rotateFront");
        document.querySelector(DOMStrings.cardSideBack).classList.toggle("hide");
        document.querySelector(DOMStrings.cardSideFront).classList.toggle("rotateBack");
        document.querySelector(DOMStrings.cardSideFront).classList.toggle("hide");
    };

    return {
      // Initilizing the total Controller (i.e: Event Listeners)
        start: () => {
            console.log("start function");
            setupEventListeners();
        }
    }
})();

// Initilizing controller
( function () {
        console.log("init");
        controller.start();
    }

)();

'use strict';


const cards = document.querySelectorAll('.card');

const addAllEvent = () => {
    cards.forEach(element =>
        element.addEventListener('click', () => element.classList.add('card--front'))
    );
}

(() => addAllEvent())();
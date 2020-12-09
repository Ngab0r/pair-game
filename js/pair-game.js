{
    'use strict';
    const iconArray = ['save', 'caret-right', 'envelope', 'caret-left', 'save', 'caret-right', 'envelope', 'caret-left', 'star', 'star'];
    const getAnIconFromArray = () => iconArray.pop();
    const cards = document.querySelectorAll('.card');
    let pairCheckTempArray = [];

    const addCardItem = (element) => element.innerHTML = `<i class="fa fa-${getAnIconFromArray()}"></i>`;
    const addEventToCard = (element) =>
        element.addEventListener('click', clickEvent, true);

    const checkIsPair = () => pairCheckTempArray.reduce((prev, next) => prev.innerHTML === next.innerHTML);


    const clickEvent = (inputElement) => {
        startCounter();
        const element = inputElement.currentTarget;
        if (pairCheckTempArray.length < 2) {
            element.classList.add('card--front');
            element.classList.remove('card--back');
            pairCheckTempArray.push(element);
            if (pairCheckTempArray.length === 2) {
                if (!checkIsPair()) {
                    console.log('nem pár');
                    setTimeout(() => {
                        pairCheckTempArray.forEach(item => {
                            item.classList.remove('card--front');
                            item.classList.add('card--back');
                        })
                        pairCheckTempArray = [];
                    }
                        , 2500);
                } else {
                    console.log('pár');
                    pairCheckTempArray.forEach(item => {
                        item.removeEventListener('click', clickEvent, true);
                    });
                    pairCheckTempArray = [];
                    if (Array.from(cards).every(item => [...item.classList].includes('card--front'))) {
                        counterStop();
                        console.log('vege');
                        setTimeout(() => window.location.reload(), 5000);
                    }
                }
            }
        }
    }
    (() => {
        cards.forEach(element => {
            addCardItem(element);
            addEventToCard(element);
        })
    }
    )();



}
let board = document.querySelector(".board");
let cards = document.querySelectorAll(".card");
let timer = document.querySelector(".timer");
let retryButton = document.querySelector(".retry");
let x12Button = document.querySelector(".x12");
let x24Button = document.querySelector(".x24");
let x36Button = document.querySelector(".x36");
let firstAttempt = true;
let firstCard;
let secondCard;
let segundos = 0;
let clock;
let time;
let unflip;
let blockedBoard = false;

x12Button.addEventListener("click", playX12);
x24Button.addEventListener("click", playX24);
x36Button.addEventListener("click", playX36);

let x24 = `
        <div class="card " id="wattpad">
            <img src="./images/008-wattpad.svg" alt="wattpad" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card" id="wattpad">
            <img src="./images/008-wattpad.svg" alt="wattpad" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card " id="twitter">
            <img src="./images/014-twitter.svg" alt="twitter" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card " id="twitter">
            <img src="./images/014-twitter.svg" alt="twitter" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card " id="pinterest">
            <img src="./images/026-pinterest.svg" alt="pinterest" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card " id="pinterest">
            <img src="./images/026-pinterest.svg" alt="pinterest" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card " id="linkedin">
            <img src="./images/031-linkedin.svg" alt="linkedin" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card " id="linkedin">
            <img src="./images/031-linkedin.svg" alt="linkedin" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card " id="messenger">
            <img src="./images/044-messenger.svg" alt="messenger" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card " id="messenger">
            <img src="./images/044-messenger.svg" alt="messenger" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card " id="picasa">
            <img src="./images/027-picasa.svg" alt="picasa" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card " id="picasa">
            <img src="./images/027-picasa.svg" alt="picasa" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
`;

let x36 = `
        <div class="card  " id="snapchat">
            <img src="./images/021-snapchat.svg" alt="snapchat" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card  " id="snapchat">
            <img src="./images/021-snapchat.svg" alt="snapchat" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card  " id="tumbrl">
            <img src="./images/016-tumblr.svg" alt="tumbrl" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card  " id="tumbrl">
            <img src="./images/016-tumblr.svg" alt="tumbrl" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card  " id="wordpress">
            <img src="./images/006-wordpress.svg" alt="wordpress" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card  " id="wordpress">
            <img src="./images/006-wordpress.svg" alt="wordpress" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card  " id="soundcloud">
            <img src="./images/020-soundcloud.svg" alt="soundcloud" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card  " id="soundcloud">
            <img src="./images/020-soundcloud.svg" alt="soundcloud" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card  " id="reddit">
            <img src="./images/024-reddit.svg" alt="reddit" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card  " id="reddit">
            <img src="./images/024-reddit.svg" alt="reddit" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card  " id="hangouts">
            <img src="./images/037-hangouts.svg" alt="hangouts" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
        <div class="card  " id="hangouts">
            <img src="./images/037-hangouts.svg" alt="hangouts" class="front-face">
            <img src="./images/backface.svg" alt="backface" class="back-face">
        </div>
`;

function shuffleCards() {
    cards.forEach(card => {
        card.style.order = Math.floor(Math.random()*100);
    })
}

function playX12() {
    board = document.querySelector(".board");
    var cant_elementos = board.childElementCount;

    for (let i = 0; i < (cant_elementos - 12); i ++) {
        board.removeChild(board.lastElementChild);
    }

    cards = document.querySelectorAll(".card");

    cards.forEach(card => {
        card.addEventListener("click", flipCard);
        card.style.height = "200px";
        card.style.width = "150px";
    });
    shuffleCards();
    reset();
}

function playX24() {
    board = document.querySelector(".board");
    var cant_elementos = board.childElementCount;

    if ((cant_elementos - 24) < 0) {
        board.innerHTML += x24;
    }
    else {
        for (let i = 0; i < (cant_elementos - 24); i ++ ) {
            board.removeChild(board.lastElementChild);
        }
    }

    cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", flipCard);
        card.style.height = "125px";
        card.style.width = "93.75px";
    });
    shuffleCards();
    reset();
}

function playX36() {
    board = document.querySelector(".board");
    var cant_elementos = board.childElementCount;

    if (cant_elementos == 12) {
        board.innerHTML += x24;
        board.innerHTML += x36;
    }
    else if (cant_elementos == 24) {
        board.innerHTML += x36;
    }

    cards = document.querySelectorAll(".card");
    cards.forEach(card => {
        card.addEventListener("click", flipCard);
        card.style.height = "110px";
        card.style.width = "82.5px";
    });
    shuffleCards();
    reset();
}

function setClock() {
    clock = setInterval(() => {
        segundos ++;
        minutos = Math.floor(segundos / 60);

        if(((segundos % 60) < 10) && minutos < 10) {
            timer.textContent = `0${minutos}:0${segundos % 60} seg`;
        }
        else if (minutos < 10) {
            timer.textContent = `0${minutos}:${segundos % 60} seg`;
        }
        else {
            timer.textContent = `${minutos}:${segundos % 60} seg`;
        }

    }, 1000);
}

function reset() {
    clearTimeout(unflip);
    blockedBoard = false;
    firstAttempt = true;
    segundos = 0;
    timer.textContent = "00:0" + segundos + " seg";
    timer.classList.remove("win");
    clearInterval(clock);
    setClock();
    flipAll();
    shuffleCards();
}

function checkWin() {
    var result = true;

    cards.forEach(card => {
        if(!card.classList.contains("flip")) {
            result = false;
        }
    })

    return result;
}

function flipAll() {
    cards.forEach(card => {
        let images = card.children;
        card.classList.remove("flip");
        images[0].classList.remove("flip");
        images[1].classList.remove("flip");
    })
}

function unflipCards() {
    let images1 = firstCard.children;
    let images2 = secondCard.children;

    firstCard.classList.toggle("flip");
    secondCard.classList.toggle("flip");
    images1[0].classList.toggle("flip");
    images1[1].classList.toggle("flip");
    images2[0].classList.toggle("flip");
    images2[1].classList.toggle("flip");

    blockedBoard = false;
}

function flipCard() {
    if(blockedBoard == true) return;

    let images = this.children;

    if(!this.classList.contains("flip")) {
        this.classList.toggle("flip");
        images[0].classList.toggle("flip");
        images[1].classList.toggle("flip");
    
        if(firstAttempt) {
            firstCard = this;
            firstAttempt = false;
        }
        else {
            secondCard = this;
            firstAttempt = true;
    
            if(firstCard.id == secondCard.id) {
                if(checkWin()){
                    time = segundos;
                    clearInterval(clock);
                    timer.textContent = `Tu tiempo fue de ${time} segundos`;
                    timer.classList.add("win");
                }
            }
            else {
                blockedBoard = true;
                unflip = setTimeout(unflipCards, 1000);
            }
        }
    }
}

shuffleCards();

retryButton.addEventListener("click", reset);

setClock();

cards.forEach(card => {card.addEventListener("click", flipCard)});
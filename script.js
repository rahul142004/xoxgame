
var mainBody = document.querySelector('.main-body');


var gamePlay  = 
        `<div class="content">
            <div class="box box-1"></div>
            <div class="box box-2"></div>
            <div class="box box-3"></div>
            <div class="box box-4"></div>
            <div class="box box-5"></div>
            <div class="box box-6"></div>
            <div class="box box-7"></div>
            <div class="box box-8"></div>
            <div class="box box-9"></div>
        </div>`

var winPage = `<div class="scd-content">Won!
            <button id="reload">Play Again</button>

            </div>`;
mainBody.innerHTML = gamePlay;

const boxes  = document.querySelectorAll('.box');
let click = 0;
const you = document.querySelector('.you');
const opp = document.querySelector('.opponent');

boxes.forEach((box) => {
    box.addEventListener('click', () => {
        click++;
        let winner = '';
        if (click % 2 == 0) {
            box.style.backgroundImage = "url(Ketchup.jpg)";
            you.classList.add('border');
            opp.classList.remove('border');
            winner = 'You'
        } else {
            box.style.backgroundImage = "url(pngwing.com.png)";
            you.classList.remove('border');
            opp.classList.add('border');
            winner = 'Opp'
        }
        if(click >= 9){
            window.location.href='index.html';
        }
        test();
    });
});

// Function to check winning conditions
function test() {
    const bg1 = window.getComputedStyle(boxes[0]).backgroundImage;
    const bg2 = window.getComputedStyle(boxes[1]).backgroundImage;
    const bg3 = window.getComputedStyle(boxes[2]).backgroundImage;

    const bg4 = window.getComputedStyle(boxes[3]).backgroundImage;
    const bg5 = window.getComputedStyle(boxes[4]).backgroundImage;
    const bg6 = window.getComputedStyle(boxes[5]).backgroundImage;

    const bg7 = window.getComputedStyle(boxes[6]).backgroundImage;
    const bg8 = window.getComputedStyle(boxes[7]).backgroundImage;
    const bg9 = window.getComputedStyle(boxes[8]).backgroundImage;

    if (bg1 === bg2 && bg2 === bg3 && bg1 !== 'none') {
        mainBody.innerHTML = winPage;
    }

    if (bg4 === bg5 && bg5 === bg6 && bg4 !== 'none') {
        mainBody.innerHTML = winPage;
    }

    if (bg7 === bg8 && bg8 === bg9 && bg7 !== 'none') {
        mainBody.innerHTML = winPage;
    }

    if (bg1 === bg4 && bg4 === bg7 && bg1 !== 'none') {
        mainBody.innerHTML = winPage;
    }

    if (bg2 === bg5 && bg5 === bg8 && bg2 !== 'none') {
        mainBody.innerHTML = winPage;
    }

    if (bg3 === bg6 && bg6 === bg9 && bg3 !== 'none') {
        mainBody.innerHTML = winPage;
    }

    if (bg1 === bg5 && bg5 === bg9 && bg1 !== 'none') {
        mainBody.innerHTML = winPage;
    }

    if (bg3 === bg5 && bg5 === bg7 && bg3 !== 'none') {
        mainBody.innerHTML = winPage;
    }
    const reload = document.querySelector('#reload');

reload.addEventListener('click',()=>{
    window.location.href = 'index.html'
});

}

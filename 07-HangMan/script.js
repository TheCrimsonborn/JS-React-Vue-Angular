const word_el = document.getElementById('word');
const correctLetters = [];
const wrongLetters = [];
const popup = document.getElementById('popup-container');
const message_el = document.getElementById('success-message')
const playAgainBtn = document.getElementById('play-again')
let selectedWord = getRandomWord();
const wrongLettersEl = document.getElementById('wrong-letters');
const items = document.querySelectorAll('.man');
const messageAl = document.getElementById('message');


function getRandomWord() {
    const words =["javascript","python","ruby","java","css","php","html"];
    return words[Math.floor(Math.random() * words.length)];

}

function displayWord(){
    word_el.innerHTML = `
        ${selectedWord.split('').map(letter => `
            <div class="letter">
                ${correctLetters.includes(letter) ? letter: ''}
            </div>
        `).join('')}
    `;

    const w = word_el.innerText.replace(/\n/g,'');
    if (w === selectedWord) {
        popup.style.display = 'flex';
        message_el.innerText = 'Congratulations!'
    }


}

function updateWrongLetters() {
    wrongLettersEl.innerHTML = `
        ${wrongLetters.length>0?'<h3></h3>':''}
        ${wrongLetters.map(letter => `<span>${letter}</span>`)}
    `;

    items.forEach((man,index) => {
        const errorCount = wrongLetters.length;
        if (index<errorCount) {
            man.style.display = "block";
        } else {
            man.style.display = "none";
        }
    })

    if(wrongLetters.length === items.length) {
        popup.style.display = 'flex';
        message_el.innerText = 'Oops!'
    }

}

function displayMessage() {
    messageAl.classList.add('show');

    setTimeout(function(){
        messageAl.classList.remove('show');
    },2000);
}

playAgainBtn.addEventListener('click',function(){
    correctLetters.splice(0);
    wrongLetters.splice(0);
    selectedWord = getRandomWord();

    displayWord();
    updateWrongLetters();
    popup.style.display = 'none';
})

window.addEventListener('keydown',function(e) {
    if (e.keyCode >= 65 && e.keyCode <= 90){
        const letter = e.key;

        if (selectedWord.includes(letter)) {
            if (!correctLetters.includes(letter)) {
                correctLetters.push(letter);
                displayWord();
            } else {
                displayMessage();
            }
        } else {
            if (!wrongLetters.includes(letter)) {
                wrongLetters.push(letter);
                updateWrongLetters(); 
            }
            else {
                displayMessage();
            }
        }
    }
})

displayWord()
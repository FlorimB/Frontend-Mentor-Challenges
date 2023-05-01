const adviceText = document.getElementById('advice');
const id = document.getElementById('id');
const diceBtn = document.querySelector('.dice >img');
diceBtn.addEventListener('click', getAdvice);

function getAdvices() {
    fetch('https://api.adviceslip.com/advice')
        .then(response => response.json())
        .then(data => {
            id.innerHTML = data.slip.id;
            adviceText.innerHTML = data.slip.advice;
        }).catch(err => console.error(err));
}
function getAdvice() {
    getAdvices();
}

getAdvices()

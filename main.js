const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnOpen = document.querySelector("#btn-open-luck")
const btnAgain = document.querySelector("#btn-again")

let luckPhrases = [
  'Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.',
  'Procure acender uma vela em vez de amaldiçoar a escuridão',
  'Nem todas as tempestades vêm para atrapalhar a sua vida. Algumas vêm para limpar seu caminho.',
  'Seus sonhos não precisam de plateia, eles só precisam de você.',
  'Só se pode alcançar um grande êxito quando nos mantemos fiéis a nós mesmos.'
]

let limit = luckPhrases.length - 1

function randomNumber() {
  return Math.round(Math.random() * limit)
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

function handleOpen() {
  toggleScreen()
  screen2
    .querySelector("p")
    .innerText = luckPhrases[randomNumber()]
}

function handleAgain() {
  toggleScreen()
}

btnOpen.addEventListener('click', handleOpen)
btnAgain.addEventListener('click', handleAgain)
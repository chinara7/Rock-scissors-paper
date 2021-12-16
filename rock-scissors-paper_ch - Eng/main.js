const avatars = ["person1.png", "person2.png", "person3.png", "person4.png", "person5.png", "person6.png"]
const handList = ["paper-hand1.png", "rock-hand1.png", "scissors-hand1.png"]

const choice = document.getElementById("choice")
const startBtn = document.getElementById("start-btn")
const playground = document.getElementById("playground")
const playBtn = document.getElementById("play-btn")

const player1Img = document.getElementById("player1-img")
const player2Img = document.getElementById("player2-img")

const player1Name = document.getElementById("player1-name")
const player2Name = document.getElementById("player2-name")

const player1Input = document.getElementById("player1-input")
const player2Input = document.getElementById("player2-input")

const avatar1 = document.getElementById("avatar-1")
const avatar2 = document.getElementById("avatar-2")

const player1Hand = document.getElementById("player1-hand")
const player2Hand = document.getElementById("player2-hand")

const resultBox = document.getElementById("result")
const finalResult = document.getElementById("final-result")

const player1Score = document.getElementById("player1-score")
const player2Score = document.getElementById("player2-score")

var scoreP1 = 0
var scoreP2 = 0

var endGame = 0

const again = document.getElementById("again")


function SelectAvatar() {
    const firstAvatar = avatar1
    const i = firstAvatar.selectedIndex
    player1Img.src = `image/${avatars[i]}`
    player1Name.innerHTML = player1Input.value

    const secondAvatar = avatar2
    const j = secondAvatar.selectedIndex
    player2Img.src = `image/${avatars[j]}`
    player2Name.innerHTML = player2Input.value

    choice.style.visibility = "hidden"
    startBtn.style.visibility = "hidden"
    playground.style.visibility = "visible"
    choice.replaceWith(playground)
}

function PlayGame() {
    const player1InputValue = player1Name.innerHTML
    const player2InputValue = player2Name.innerHTML

    if (endGame <= 10) {
        const choice1 = Math.round(Math.random() * 2)
        const choice2 = Math.round(Math.random() * 2)

        player1Hand.src = `image/${handList[choice1]}`
        player2Hand.src = `image/${handList[choice2]}`

        if (choice1 == 0 && choice2 == 0) {
            result = `No one won`
        }
        else if (choice1 == 0 && choice2 == 1) {
            result = `Congratulations  ${player1InputValue}! You earned 1 point for folding the paper. `
            scoreP1 += 1
        }
        else if (choice1 == 0 && choice2 == 2) {
            result = `Congratulations  ${player2InputValue}! You get 1 point for cutting scissors paper. `
            scoreP2 += 1
        }
        else if (choice1 == 1 && choice2 == 0) {
            result = `Congratulations ${player2InputValue}! You earned 1 point for folding the paper. `
            scoreP2 += 1
        }
        else if (choice1 == 1 && choice2 == 1) {
            result = `No one won`
        }
        else if (choice1 == 1 && choice2 == 2) {
            result = `Congratulations ${player1InputValue}! You earned 1 point for crushing stone scissors. `
            scoreP1 += 1
        }
        else if (choice1 == 2 && choice2 == 0) {
            result = `Congratulations ${player1InputValue}! You get 1 point for cutting scissors paper.`
            scoreP1 += 1
        }
        else if (choice1 == 2 && choice2 == 1) {
            result = `Congratulations ${player2InputValue}!You earned 1 point for crushing stone scissors.`
            scoreP2 += 1
        }
        else if (choice1 == 2 && choice2 == 2) {
            result = `No one won`
        }
        resultBox.innerHTML = result
        player1Score.innerHTML = scoreP1
        player2Score.innerHTML = scoreP2
        endGame += 1
    }
    else {
        playBtn.style.visibility = "hidden"
        resultBox.style.visibility = "hidden"
        resultBox.replaceWith(finalResult)
        finalResult.style.visibility = "visible"
        const playAgain = setTimeout(Again, 5000)

        // music.pause()

        if (scoreP1 > scoreP2) {
            finalResult.innerHTML = `Game over! The winner of the game   ${player1InputValue}`
        }
        else if (scoreP1 < scoreP2) {
            finalResult.innerHTML = `Game over! The winner of the game    ${player2InputValue}`
        }
        else {
            finalResult.innerHTML = `Game over! No one won `
        }
    }
}

function Again() {
    playground.style.visibility = "hidden"
    again.style.visibility = "visible"
    playground.replaceWith(again)
}

// const p1Button = document.querySelector('#p1Button')
// const p2Button = document.querySelector('#p2Button')
const resetButton = document.querySelector('#reset')
// const p1Display = document.querySelector('#p1Display')
// const p2Display = document.querySelector('#p2Display')
const winningScoreSelect = document.querySelector('#playto')
let winningScore = 1
let isGameOver = false

const p1 = {
    button:document.querySelector('#p1Button'),
    display:document.querySelector('#p1Display'),
    score:0
}

const p2 = {
    button:document.querySelector('#p2Button'),
    display:document.querySelector('#p2Display'),
    score:0
}


p1Button.addEventListener('click', function(){
    // if(!isGameOver){
    //     p1Score += 1
    //     p1Display.textContent = p1Score
    //     if(p1Score === winningScore){
    //         isGameOver = true
    //         p1Display.classList.add('has-text-success')
    //         p2Display.classList.add('has-text-danger')
    //     }
    // }
    updateScore(p1,p2)
})

p2Button.addEventListener('click', function(){
    // if(!isGameOver){
    //     p2Score += 1
    //     if(p2Score === winningScore){
    //         isGameOver = true
    //         p2Display.classList.add('has-text-success')
    //         p1Display.classList.add('has-text-danger')
    //     }
    // }
    // p2Display.textContent = p2Score
    updateScore(p2,p1)
})


resetButton.addEventListener('click', reset)

winningScoreSelect.addEventListener('change', function(){
    winningScore = parseInt(this.value)
    reset()
})

function reset(){
    isGameOver = false
    for(let p of [p1,p2]){
        p.score = 0
        p.display.textContent = p.score
        p.display.classList.remove('has-text-success','has-text-danger')
    }
}

function updateScore(player,opponent){
    if(!isGameOver){
        player.score += 1
        player.display.textContent = player.score
        if(player.score === winningScore){
            isGameOver = true
            player.display.classList.add('has-text-success')
            opponent.display.classList.add('has-text-danger')
        }
    }
}
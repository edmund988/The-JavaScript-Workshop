function randomNumberGenerator(){
    return Math.floor( Math.random()*21 ) + 1
}

let playerScore = randomNumberGenerator()
let targetScore = randomNumberGenerator()
let luckyScore = randomNumberGenerator()
let unluckyScore = randomNumberGenerator()
let wallet = 0
if (playerScore === luckyScore && luckyScore !== unluckyScore){
    wallet += luckyScore + playerScore
} else if (playerScore === unluckyScore && luckyScore !== unluckyScore) {
    wallet = 0
} else if (playerScore === targetScore){

}

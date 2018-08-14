// Score 119:
//
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [4, 4]
// ]
//
// Score 141:
//
// var frames = [
//   [1, 2], [6, 4], [5, 4], [10, 0], [7, 2], [10, 0], [10, 0], [5, 2], [7, 0], [10, 10, 10]
// ]


function addScore(frames) {
  let scoredFrames = frames.map(frame => {
    return scoreFrame(frame)
  })
  return scoredFrames
}

function addTotalScore(scoredFrames) {
  return scoredFrames.reduce((scoreAccumulator, frameScore) => {
    return scoreAccumulator + frameScore
  })
}

function scoreFrame(frame) {
  if (frame[0] + frame[1] < 10) {
    return scoreRegFrame(frame)
  } else if (frame[0] + frame[1] == 10)
}


function scoreRegFrame(frame) {

}

function scoreStrike(frame) {

}

function scoreSpare(frame) {

}

function scoreLastFrame(frame) {

}

function isRegFrame(frame) {

}

function isStrike(frame) {

}

function isSpare(frame) {

}

function isLastFrame(frame) {

}




// function addScore (frames) {
//     let scoredFrames = frames.map(frame => {
//         return scoreFrame(frame)
//     })
//     return scoredFrames.reduce((total, value) => {
//         return total + value
//     })
// }
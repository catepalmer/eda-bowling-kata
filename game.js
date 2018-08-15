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



function addScore (frames) {
  let score = 0
  for (let i = 0; i < frames.length; i++) {
    score += frames[i][0] + frames[i][1]
    if (frames[i].length === 3) {
      score += frames[i][2]
    } else if (frames[i][0] + frames[i][1] === 10) {
      score += frames[i+1][0]
      if (frames[i][0] === 10) {
        if (frames[i+1].length === 3 || frames[i+1][0] < 10) {
          score += frames[i+1][1]
        } else {
          score += frames[i+2][0]
        }
      }
    }
  }
  return score
}




function addScore (frames) {
  let score = 0
  for (let i = 0; i < frames.length; i++) {
    let currentFrame = frames[i]
    let nextFrame = frames[i+1]
    let nextNextFrame = frames[i+2]
    let ballOne = currentFrame[0]
    let ballTwo = currentFrame[1]
    let ballThree = currentFrame[2]
    let ballOneNextFrame = nextFrame[0]
    let ballTwoNextFrame = nextFrame[1]
    let ballOneNextNextFrame = nextNextFrame[0]
    let frameHasThreeBalls = currentFrame.length === 3
    let isSpareOrStrike = ballOne + ballTwo === 10
    let isStrike = ballOne === 10
    let nextFrameHasThreeBalls = nextFrame.length === 3
    let nextFrameIsNotStrike = ballOneNextFrame < 10

    score += ballOne + ballTwo

    if (frameHasThreeBalls) {
      score += ballThree
    } else if (isSpareOrStrike) {
      score += ballOneNextFrame
      if (isStrike) {
        if (nextFrameHasThreeBalls || nextFrameIsNotStrike) {
          score += ballTwoNextFrame
        } else {
          score += ballOneNextNextFrame
        }
      }
    }
  }
  return score
}

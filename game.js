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
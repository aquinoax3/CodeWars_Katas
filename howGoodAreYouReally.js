// 


function betterThanAverage(classPoints, yourPoints) {

    classPoints.push(yourPoints)
    let result = 0

    for (let i = 0; i < classPoints.length; i++) {
        console.log(result += classPoints[i])
    }
    const average = result / classPoints.length

    if (yourPoints > average) {
        return true
    } else {
        return false
    }
}
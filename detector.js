// Checks on car speed

const speed =100
    let difference=(speed-70)/5

function speedDetector(speed) {
    if (speed<= 70) {
        console.log("OK")
    }else if (speed>70 && speed<=130) {
        console.log(`Points: ${(speed-70)/5}`)
    }else if (difference>12) {
        console.log("License suspended")
    }
}
//12 points are reached when the speed is at 130
speedDetector(speed)


// Checks on car speed


const speed =1000

function speedDetector(speed) {
    let difference=(speed-7)/5
    if (speed<= 70) {
        console.log("OK")
    }else if (speed>70 && speed<130) {
        console.log(`Points: ${(speed-70)/5}`)
        //12 points are exceeded at a speed above 130
    }else if (difference>12) {
        console.log("License suspended")
    }
}

speedDetector(speed)

// Checks on car speed


//const speed =1000

function speedDetector(speed) {
    if (speed<= 70) {
        console.log("OK")
    }else if (speed>70 && speed<130) {
        console.log(`Points: ${(speed-70)/5}`)
        //12 points are exceeded at a speed above 130
    }else if (speed>130) {
        console.log("License suspended")
    }
}

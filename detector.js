// Checks on car speed


const speed =1000

function speedDetector(speed) {
    if (speed<= 70) {
        console.log("OK")
    }else if (speed>70) {
        console.log(`Points: ${(speed-70)/5}`)
    }
}

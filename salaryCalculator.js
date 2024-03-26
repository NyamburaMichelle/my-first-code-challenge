const personalRelief = 2400
let NHIF
let NSSF = 400
const gross =24900
let paye

const calculateNetSalary = function(netSalary) {
     netSalary= gross- (calculateTax()) + personalRelief
     return netSalary
 }

const calculateTax =function (){
     let tax 
     tax= paye + NSSF + (calculateNHIF())
    if( gross<= 24000) {
        paye= gross* 0.1
        return paye+NSSF + (calculateNHIF())
    }else if ( gross =>24001 && gross<= 32333) {
        paye= ( 24000*0.1) + (gross-24000)*0.25
        return paye + NSSF + (calculateNHIF())
    }else if ( gross => 32334 && gross<= 500000) {
        paye =( 24000*0.1) + (32333-24000)*0.25 + (gross-32333)*0.3
        return paye + NSSF + (calculateNHIF())
    } else if (gross =>500001 && gross<=800000) {
        paye = ( 24000*0.1) + (32333-24000)*0.25 + (500000-32333)*0.3 + (gross-500000)*0.325
        return paye + NSSF + (calculateNHIF())
    } else if ( gross=> 800001) {
        paye= ( 24000*0.1) + (32333-24000)*0.25 + (500000-32333)*0.3 + (800000-500000)*0.325 + (gross- 800000)*0.35
        return paye + NSSF + (calculateNHIF())
    }
}

const calculateNHIF = function (){//declaring a function calculateNHIF
    if (gross > 0 && gross <= 5999) {//using if statements to assign the different ranges
        NHIF = 150 
        return NHIF
    } else if (gross >= 6000 && gross <= 7999) {
        NHIF = 300 
        return NHIF
    } else if (gross >= 8000 && gross <= 11999) {
        NHIF = 400 
        return NHIF
    } else if (gross >= 12000 && gross <= 14999) {
        NHIF = 500 
        return NHIF
    } else if (gross >= 15000 && gross <= 19999) {
        NHIF = 600 
        return NHIF
    } else if (gross >= 20000 && gross <= 24999) {
        NHIF = 750 
        return NHIF
    } else if (gross >= 25000 && gross <= 29999) {
        NHIF = 850 
        return NHIF
    } else if (gross >= 30000 && gross <= 34999) {
        NHIF = 900 
        return NHIF
    } else if (gross >= 35000 && gross <= 39999) {
        NHIF = 950 
        return NHIF
    } else if (gross >= 40000 && gross <= 44999) {
        NHIF = 1000 
        return NHIF
    } else if (gross >= 45000 && gross <= 49999) {
        NHIF = 1100 
        return NHIF
    } else if (gross >= 50000 && gross <= 59999) {
        NHIF = 1200 
        return NHIF
    } else if (gross >= 60000 && gross <= 69999) {
        NHIF = 1300 
        return NHIF
    } else if (gross >= 70000 && gross <= 79999) {
        NHIF = 1400 
        return NHIF
    } else if (gross >= 80000 && gross <= 89999) {
        NHIF = 1500 
        return NHIF
    } else if (gross >= 90000 && gross <= 99999) {
        NHIF = 1600 
        return NHIF
    } else if (gross>99999) {
        NHIF = 1700 //for all the values above 100000, the NHIF value remains const ... that is 1700 
        return NHIF
    }
}

console.log(calculateNetSalary())  
// // NSSF = 400;

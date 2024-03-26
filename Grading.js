//Student grade generator

  const grade =80

  function studentGradeGenerator(grade){
    if (grade> 79) {
        return "A" 
        //returns grade A if above 79
    }else if (grade>= 60 && grade<=79) {
        return "B" 
        //returns grade B if below 60
    }else if (grade>=50 && grade<=59) {
        return "C"
        //returns grade C if above 50
    } else if (grade>=40 && grade<=49) {
        return "D"
        //returns grade D if above 40
    }else if (grade<40) {
        return "E"
        //returns grade E if below 40
    }
} 
   console.log(studentGradeGenerator(grade) )

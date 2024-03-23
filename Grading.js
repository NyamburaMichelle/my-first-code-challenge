//Student grade generator

  //const grade =80

  function studentGradeGenerator(grade){
    if (grade> 79) {
        return "A"
    }else if (grade>= 60 && grade<=79) {
        return "B"
    }else if (grade>=50 && grade<=59) {
        return "C"
    } else if (grade>=40 && grade<=49) {
        return "D"
    }else if (grade<40) {
        return "E"
    }
} 
   //console.log(studentGradeGenerator(grade) )
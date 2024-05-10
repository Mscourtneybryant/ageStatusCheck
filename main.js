//implementa check adult age status function. it should return true if the age is equal to 18 or older and false if the age is under

//--------------- PART ONE ---------------//

function checkAdultAgeStatus(age){
    if(age >= 18){
        console.log(`You are ${age} years old. You are an adult!`)
    }else{
        console.log (`You are ${age} years old. You are NOT an adult!`)
    }
}

checkAdultAgeStatus(17)


//--------------- PART TWO ---------------//

//create a variable with age check and see if it is true or not by using a boolean

let adultStatus = 24;

if (checkAdultAgeStatus === adultStatus ){
    console.log("Equal")
}else{
    console.log("Not equal")
}


const dateOfBirth = document.querySelector("#date-of-birth");
const luckyNumber = document.querySelector("#lucky-number");
const checkNumberButton = document.querySelector("#check-number");
const outputBox = document.querySelector("#output");

function compareValues(sum, luckyNumber) {
    if(sum%luckyNumber===0) {
        outputBox.innerText="Yay! Your birthday is lucky 😄";
    }else {
        outputBox.innerText="Oh no! Your birthday is not lucky ☹️";
    }
}

function checkBirthDateIsLucky() {
    const dob = dateOfBirth.value;
    const sum = calculateSum(dob);
    if (sum&&dob) {

        compareValues(sum, luckyNumber.value);
    }
    else {

        outputBox.innerText = "Enter both the values";
    }
}

function calculateSum(dob) {
    dob = dob.replaceAll("-","");
    let sum = 0;
    for(let index = 0; index<dob.length; index++) {
        sum = sum + Number(dob.charAt(index));
    }
    return sum;
}





checkNumberButton.addEventListener("click", checkBirthDateIsLucky);
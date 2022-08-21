/* 3 eventListeners for 3 user accessible input fields */
let temp1 = document.getElementById("bill-input");
temp1.addEventListener("input", () => {
    let billAmount = document.getElementById("bill-input").value;
    let tipPercent = document.getElementById("get-tip").value;
    let people = document.getElementById("person-no").value;

    let tip = parseInt(billAmount*tipPercent/100);
    let totalAmount = parseInt(billAmount)+tip;

    document.getElementById("tip-output").innerHTML = (tip/people).toFixed(2);
    document.getElementById("total-payment-per-person").innerHTML = (totalAmount/people).toFixed(2);
});

let temp2 = document.getElementById("get-tip");
temp2.addEventListener("input", () => {
    let billAmount = document.getElementById("bill-input").value;
    let tipPercent = document.getElementById("get-tip").value;
    let people = document.getElementById("person-no").value;

    let tip = parseInt(billAmount*tipPercent/100);
    let totalAmount = parseInt(billAmount)+tip;

    document.getElementById("tip-output").innerHTML = (tip/people);
    document.getElementById("total-payment-per-person").innerHTML = (totalAmount/people);
});

let temp3 = document.getElementById("person-no");
temp3.addEventListener("input", () => {
    let billAmount = document.getElementById("bill-input").value;
    let tipPercent = document.getElementById("get-tip").value;
    let people = document.getElementById("person-no").value;

    let tip = parseInt(billAmount*tipPercent/100);
    let totalAmount = parseInt(billAmount)+tip;

    document.getElementById("tip-output").innerHTML = (tip/people);
    document.getElementById("total-payment-per-person").innerHTML = (totalAmount/people);
});



function tipIncrementHandler(){
    let temp = document.getElementById("get-tip").value;
    temp++;
    document.getElementById("get-tip").value = temp;
    myFunc();
}
function tipDecrementHandler(){
    let temp = document.getElementById("get-tip").value;
    if(temp <= 0){
        temp = 0;
    }
    else{
        temp--;
    }
    document.getElementById("get-tip").value = temp;
    myFunc();
}
function pplIncrementHandler(){
    let temp = document.getElementById("person-no").value;
    temp++;
    document.getElementById("person-no").value = temp;
    myFunc();
}
function ppldecrementHandler(){
    let temp = document.getElementById("person-no").value;
    if(temp <= 1){
        temp = 1;
    }
    else{
        temp--;
    }
    document.getElementById("person-no").value = temp;
    myFunc();
}

/*function to run on every input button click*/

function myFunc(){
    let billAmount = document.getElementById("bill-input").value;
    let tipPercent = document.getElementById("get-tip").value;
    let people = document.getElementById("person-no").value;

    let tip = parseInt(billAmount*tipPercent/100);
    let totalAmount = parseInt(billAmount)+tip;

    document.getElementById("tip-output").innerHTML = (tip/people);
    document.getElementById("total-payment-per-person").innerHTML = (totalAmount/people);
}
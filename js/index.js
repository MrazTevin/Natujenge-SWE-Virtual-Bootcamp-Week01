// var output_salary = document.querySelector("#output");

// function getGrossSalary() {
//     var salary = document.getElementById("salform").elements.namedItem("fname").value;
//     console.log(salary);

//     var output_salary = document.querySelector
//     output_salary.innerHTML += fname.value;
// }

// var output_salary = document.querySelector("#output")
// output_salary = getGrossSalary().innerHTML += fname.value;

// function getGrossSalary() {
//     var salary = document.salform.output.value;
//     salary = document.querySelector('td')
//     td.innerHTML = output;
//     document.getElementById("fname").value;

// }

var entry = document.getElementById("entry");
entry.addEventListener("click", getGrossSalary);

function getGrossSalary(e) {
    var salary = document.getElementById("fname").value;

    if(!salary) {
        alert("Input field is empty");
        return;
    }

    var one = document.getElementById("output");
    one.innerHTML += salary;

    // var display = document.querySelector("#output");
    // display.innerHTML += "<td>"+salary+"</td>";

}

var NSSF = 1080;
var PersonalRelief = 2400;
var NHIFRelief = 210;
var NHIFContribution = 2400;

var Deductions = PersonalRelief + NHIF_Relief + NHIFContribution + NSSF;


function calculateTaxes(salary){
    var tax = 0;
    if(salary <= 24000){
        tax = salary * 0.1
    }
    else if( salary <= (24000 + 8333)){
        tax = 2400 + (salary - 24000) * 0.25;
    }
    else {
        tax = 4483.25 + (salary - 32333) * 0.3;
    }
    paye = tax - Deductions;
    return paye;

}




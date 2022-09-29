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

function getGrossSalary() {
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

Deductions = PersonalRelief + NHIF_Relief + NHIFContribution + NSSF;


//side navigation functionality
function openNav() {
    document.getElementById("mySidenav").style.width = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }


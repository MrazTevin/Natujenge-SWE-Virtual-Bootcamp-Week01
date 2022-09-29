function calculateTax() {
    var salary = parseFloat(document.getElementById("fname").value);
    var tax = amount * 0.1;
    var total = tax + amount;
    document.getElementById("result").innerHTML = "tax = " + tax + " and total is " + total;

    document.getElementById("entry").addEventListener(
        "click",calculateTax);

}
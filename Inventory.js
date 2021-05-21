let addToCalc = document.getElementById('addToCalc');
let toCalcContainer = document.getElementById('toCalcContainer');
let inputField = document.getElementById('inputField');
let quantity = document.getElementById('inputFieldSecond');
let totalCostCalc = document.getElementById('totalCostCalc');
let output = document.getElementById('cost');
let theCost = document.getElementById('theCost');

//Calculates cost for x quantity of product y
function calculate() {
    theCost.value = inputField.value * quantity.value;
}

//Appends the calculated cost to the list of materials that will be included in final cost calculation
function addProduct() {
    var product = document.createElement('p');
    product.innerText = theCost.value;
    toCalcContainer.appendChild(product);

    product.addEventListener('click', () => {
        product.style.textDecoration = "line-through"
    });
    product.addEventListener('dblclick', () => {
        toCalcContainer.removeChild(product)
    });
}

//Need to find a way to create an array to add all of the <p> values and display them as the final cost calculation!
totalCostCalc.addEventListener('click', () => {
    var items = document.getElementsByTagName("p").value
    let output = document.getElementById('cost');
    var totalCost = items++;
    output.value = totalCost;

})
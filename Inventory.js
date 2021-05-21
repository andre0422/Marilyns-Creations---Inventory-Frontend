let addToCalc = document.getElementById('addToCalc');
let toCalcContainer = document.getElementById('toCalcContainer');
let inputField = document.getElementById('inputField').value;
let quantity = document.getElementById('inputFieldSecond').value;
let totalCostCalc = document.getElementById('totalCostCalc');
let output = document.getElementById('cost');

function calculate() {
    var inputField = document.getElementById('inputField').value;
    var quantity = document.getElementById('inputFieldSecond').value;
    var cost = document.getElementById('theCost');
    var theCost = inputField * quantity;
    cost.value = theCost;

}

addToCalc.addEventListener('click', () => { 
    var prod = document.createElement('p');
    prod.innerText = theCost.value;
    toCalcContainer.appendChild(prod);
    inputField.value = 0;
    quantity.value = 0;
    cost.value = 0;
    prod.addEventListener('click', () => {
        prod.style.textDecoration = "line-through"
    });
    prod.addEventListener('dblclick', () => {
        toCalcContainer.removeChild(prod)
    });
})


totalCostCalc.addEventListener('click', () => {
    var items = document.getElementsByTagName("p").value
    let output = document.getElementById('cost');
    var totalCost = items++;
    output.value = totalCost;

})
//Need to find a way to create an array to add all of the <p> values and display them//
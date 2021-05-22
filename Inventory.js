let addToCalc = document.getElementById('addToCalc');
let toCalcContainer = document.getElementById('toCalcContainer');
let deleteContainer = document.getElementById('deleteContainer')
let inputField = document.getElementById('inputField-1');
let quantity = document.getElementById('inputFieldSecond');
let totalCostCalc = document.getElementById('totalCostCalc');
let output = document.getElementById('cost');
let theCost = document.getElementById('theCost');
let productCost = [];
let totalCost = document.getElementById('output');

//Calculates cost for x quantity of product y
function calculate() {
    theCost.value = inputField.value * quantity.value;
}

//Appends the calculated cost to the list of materials that will be included in final cost calculation
function addProduct() {
    
    productCost.push(theCost.valueAsNumber);
    var product = document.createElement('p');
    var deleteProduct = document.createElement('button')
    deleteProduct.classList.add('deleteButton');
    product.classList.add('value')
    product.innerText = theCost.value;
    toCalcContainer.appendChild(product);
    deleteContainer.appendChild(deleteProduct);


    console.log(productCost);
    
    inputField.value = "";
    quantity.value = "";
    theCost.value = 1;
    
    /*var product = document.createElement('p'); 
    
    product.innerText = theCost.value;
    toCalcContainer.appendChild(product); */

    deleteProduct.addEventListener('click', () => {
        toCalcContainer.removeChild(product)
        deleteContainer.removeChild(deleteProduct)
    });
    /*product.addEventListener('dblclick', () => {
        toCalcContainer.removeChild(product)
    }); */
}

totalCostCalc.addEventListener('click', () => {
    
    const yourFinalPrice = (accumulator, currentValue) => accumulator + currentValue;
    totalCost.value = (productCost.reduce(yourFinalPrice));
})



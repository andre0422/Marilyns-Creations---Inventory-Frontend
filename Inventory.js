let addToCalc = document.getElementById('addToCalc');
let toCalcContainer = document.getElementById('toCalcContainer');
let deleteContainer = document.getElementById('deleteContainer')
let inputField1 = document.getElementById('inputField-1');
let inputField2 = document.getElementById('inputField-2');
let inputField3 = document.getElementById('inputField-3');
let quantity = document.getElementById('inputFieldSecond');
let totalCostCalc = document.getElementById('totalCostCalc');
let output = document.getElementById('cost');
let theCost = document.getElementById('theCost');
let productCost = [];
let totalCost = document.getElementById('output');
let jewelryDisplay = document.getElementById('search_results');
let reduction = 0;

//Calculates cost for x quantity of product y
function calculate(event) {
    theCost.innerHTML = event.target.value * quantity.value;
    theCost.value = event.target.value * quantity.value;
}

//Appends the calculated cost to the list of materials that will be included in final cost calculation
function addProduct() {
    
    productCost.push(theCost.valueAsNumber);
    var product = document.createElement('p');
    var deleteProduct = document.createElement('button');
    deleteProduct.value = theCost.value;
    deleteProduct.classList.add('deleteButton');
    product.classList.add('value')
    product.innerText = theCost.value;
    toCalcContainer.appendChild(product);
    deleteContainer.appendChild(deleteProduct);


    console.log(productCost);
    
    inputField1.value = "material";
    inputField2.value = "fineness";
    inputField3.value = "size";
    quantity.value = 1;
    theCost.value = 1;
    
    /*var product = document.createElement('p'); 
    
    product.innerText = theCost.value;
    toCalcContainer.appendChild(product); */

    deleteProduct.addEventListener('click', (event) => {
        toCalcContainer.removeChild(product)
        deleteContainer.removeChild(deleteProduct)
        reduction += Number(event.target.value);


        console.log(reduction);
        
    });
    /*product.addEventListener('dblclick', () => {
        toCalcContainer.removeChild(product)
    }); */
}

totalCostCalc.addEventListener('click', () => {
    
    const yourFinalPrice = (accumulator, currentValue) => accumulator + currentValue;
    totalCost.value = (productCost.reduce(yourFinalPrice)) - reduction;
})

//Mock jewelry array
jewelry = [
    {'product': 'Gold', 'unitprice': 1.50, 'currency': 'CAD'},
    {'product': '14k Gold', 'unitprice': 5.00, 'currency': 'CAD'},
    {'product': '5mm Gold Balls', 'unitprice': 3.50, 'currency': 'CAD'},
    {'product': 'Gold Earrings', 'unitprice': 20.99, 'currency': 'CAD'},
    {'product': 'Silver', 'unitprice': 0.70, 'currency': 'CAD'},
    {'product': '10mm Silver Chain', 'unitprice': 8.95, 'currency': 'CAD'}
];

//Will send query to server and receive jewelry array
function search() {

    jewelryDisplay.innerHTML = '';
    displayResults();
}

//Will display queried jewelry 
function displayResults() {

    jewelry.forEach((item) => {
        let element = document.createElement('div');
        let text = document.createTextNode(`${item.product}\t${item.unitprice}\t${item.currency}`);
        element.appendChild(text);
        jewelryDisplay.appendChild(element);

        let button = document.createElement('button');
        button.innerHTML = 'Select';
        button.value = item.unitprice;
        button.addEventListener('click', calculate);
        jewelryDisplay.appendChild(button);
    });
}
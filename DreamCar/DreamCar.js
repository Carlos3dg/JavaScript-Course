var dreamCar = {
    make: 'Ford Mustang',
    model: 65,
    year: 2018,
    color: 'ffb800',
    price: 350000,
    engine: 'Inline'
}

document.getElementById('pricetag').innerHTML = dreamCar.price;
document.getElementById('modelyear').innerHTML = dreamCar.year;
document.getElementById('body').style.backgroundColor = '#' + dreamCar.color;
document.getElementById('body').innerHTML = dreamCar.make + ' ' + dreamCar.model;
document.getElementById('backwheel').style.border = '6px solid black';

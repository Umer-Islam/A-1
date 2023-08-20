"use strict";
function createCar(manufacturer, modelName, ...extra) {
    const car = {
        manufacturer,
        modelName
    };
    extra.forEach(([key, value]) => {
        car[key] = value;
    });
    return car;
}
const theCar = createCar("Toyota", "Altas", ["color", "purple"], ["year", 2020], ["features", ["GPS", "Bluetooth", `V8`]]);
console.log(theCar);

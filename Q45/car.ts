interface Car {
    manufacturer: string;
    modelName: string;
    [key: string]: any; 
}

function createCar(manufacturer: string, modelName: string, ...extra: [string, any][]): Car {
    const car: Car = {
        manufacturer,
        modelName
    };

    extra.forEach(([key, value]) => {
        car[key] = value;
    });

    return car;
}

const theCar = createCar("Toyota", "Altas", ["color", "purple"], ["year", 2020], ["features", ["GPS", "Bluetooth",`V8`]]);

console.log(theCar);

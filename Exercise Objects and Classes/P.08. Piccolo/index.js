function manageParking(input){
    
    class Parking {
        constructor() {
            this.cars = new Set();
        }
        enter(carNumber) {
            this.cars.add(carNumber);
        }
        exit(carNumber) {
            this.cars.delete(carNumber);
        }
        printCars() {
            this.cars.size === 0
            ? console.log("Parking Lot is Empty")
            : Array.from(this.cars)
            .sort()
            .forEach((carNumber) => {
                console.log(carNumber);
            });
        }
    }
    const parking = new Parking();
    
    input.forEach((entry) => {
        const [direction, carNumber] = entry.split(", ");
        direction === "IN" ? parking.enter(carNumber) : parking.exit(carNumber);
    });
    
    parking.printCars();

    // const parking = [];
    
    // input.forEach(entry => {
    //     const [command, number] = entry.split(', ');
    
    //     if (command === "IN") {
    //         parking.push(number);
    //     }else if(command === "OUT"){
    //         const index = parking.indexOf(number);
    //         parking.splice(index, 1);
    //     }
    // });
    
    // if (parking.length >= 1) {
    //     parking.sort();
    //     Object.keys(parking).forEach(key => {
    //         console.log(`${parking[key]}`);
    //     });
    // }else{
    //     console.log("Parking Lot is Empty");
    // }
}

manageParking(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']);

manageParking(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']);
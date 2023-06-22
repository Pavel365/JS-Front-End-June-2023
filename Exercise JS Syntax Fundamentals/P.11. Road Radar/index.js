function radar(speed, area){
    let speedLimit;

    if (area === 'motorway') {
        speedLimit = 130;
    }else if (area === 'interstate') {
        speedLimit = 90;
    } else if (area === 'city') {
        speedLimit = 50;
    }else if (area === 'residential') {
        speedLimit = 20;
    }

    if (speed <= speedLimit) {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }else if(speed > speedLimit){
        let difference = Math.abs(speedLimit - speed);

        let status;

        if (difference <= 20) {
            status = 'speeding';
        }else if(difference <= 40){
            status = 'excessive speeding';
        }else{
            status = 'reckless driving'
        }

        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    }
}

radar(40, 'city');
radar(21, 'residential');
radar(120, 'interstate');
radar(200, 'motorway');
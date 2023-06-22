function solve(num1, num2, num3){
    let arr = [num1, num2, num3];
    let currLargestNumber = -1000000;

    for(let i = 0; i < arr.length; i++){
        if(arr[i] > currLargestNumber){
            currLargestNumber = arr[i];
        }
    }

    console.log(`The largest number is ${currLargestNumber}.`);
}

solve(-3, -5, -22.5);
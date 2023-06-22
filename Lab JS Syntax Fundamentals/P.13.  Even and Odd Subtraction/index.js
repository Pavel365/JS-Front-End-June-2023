function calculateDifferenceBetweenOddAndEven(arr){
    let sumOdd = 0;
    let sumEven = 0;

    arr.forEach(function(element){
        if (element % 2 === 0) {
            sumEven += element;
        }else{
            sumOdd += element;
        }     
    });

    let result = sumEven - sumOdd;
    console.log(result);
}

calculateDifferenceBetweenOddAndEven([1,2,3,4,5,6]);
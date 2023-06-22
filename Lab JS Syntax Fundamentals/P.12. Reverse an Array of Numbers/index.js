function reverse(n, arr){
    let array = [];
    for (let index = 0; index < n; index++) {
        array[index] = arr[index];
    }

    let output = "";
    for (let index = array.length-1; index >= 0; index--) {
        output += array[index] += " ";
    }

    console.log(output);
}

reverse(3, [10, 20, 30, 40, 50]);
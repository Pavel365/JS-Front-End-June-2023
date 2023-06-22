function reversedChars(char1, char2, char3){
    let arr = [];
    arr.push(char1);
    arr.push(char2);
    arr.push(char3);

    arr.reverse();

    console.log(...arr);
}

reversedChars('A','B','C');
reversedChars('1','L','&');
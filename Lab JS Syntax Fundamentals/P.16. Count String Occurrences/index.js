function countOccurences(text, word){
    const words = text.split(" ");
    let occurances = 0;

    for (let index = 0; index < words.length; index++) {
        if (words[index] === word) {
            occurances++;
        }
    }
    console.log(occurances);
}

countOccurences('This is a word and it also is a sentence','is');
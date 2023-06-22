function censorWords(text, word){
    const censorShipWord = '*'.repeat(word.length);

    while(text.includes(word)){
        text = text.replace(word, censorShipWord);
    }

    console.log(text);
}

censorWords('A small sentence with some words', 'small');
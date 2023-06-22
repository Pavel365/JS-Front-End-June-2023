function revelWords(words, sentence){
    let seperatedWords = words.split(', ');
    let text = sentence.split(' ');

    for (let el of text) {
        if (el.includes('*')) {
            for (let currWord of seperatedWords) {
                if (el.length === currWord.length) {
                    let index = text.indexOf(el);
                    text.splice(index, 1, currWord)
                }
            }
        }
    }

    console.log(...text);
}

revelWords('great','softuni is ***** place for learning new programming languages');
revelWords('great, learning','softuni is ***** place for ******** new programming languages');
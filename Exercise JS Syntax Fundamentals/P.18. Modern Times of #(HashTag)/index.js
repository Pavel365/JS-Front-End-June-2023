function findHasTagWords(input){
    let text = input.split(' ');

    for (let word of text) {
        if (word[0].trim().includes('#') && word.length > 1) {
            if (/\B#[A-Za-z]+\b/g.test(word)) {
                console.log(word.slice(1));
            }
        }
    }
}

findHasTagWords('Nowadays everyone uses # to tag a #special word in #socialMedia');
findHasTagWords('The symbol # is known #variously in English-speaking #regions asthe #number sign');
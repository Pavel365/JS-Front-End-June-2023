function trackWords(input){
    const [searchWords, ...words] = input;

    const wordOccurences = searchWords.split(" ").reduce((acc, curr) => {
        acc[curr] = 0;

        return acc;
    }, {});

    words.forEach(word => {
        if (wordOccurences.hasOwnProperty(word)) {
            wordOccurences[word] += 1;
        }
    });

    Object.entries(wordOccurences)
    .sort(([, a], [, b]) => b - a)
    .forEach(([key, value]) => {
      console.log(`${key} - ${value}`);
    });
}

trackWords([
    'this sentence',
    'In', 'this', 'sentence', 'you', 'have',
    'to', 'count', 'the', 'occurrences', 'of',
    'the', 'words', 'this', 'and', 'sentence',
    'because', 'this', 'is', 'your', 'task']);

trackWords([
    'is the',
    'first', 'sentence', 'Here', 'is',
    'another', 'the', 'And', 'finally', 'the',
    'the', 'sentence']);
function getSubstring(text, startIndex, endIndex){
    const substring = text.substr(startIndex, endIndex);
    
    console.log(substring);
}

getSubstring('ASentence', 1, 8);
const findSum = (num: number): number => {
    if (isNaN(num)) return 0;

    if (num < 10) {
        return num;
    }
    const lastDigit = num % 10;
    const remainingNum = Math.floor(num / 10);
    return findSum(lastDigit + findSum(remainingNum));
}

const numberOfWords = (text: string): number => {
    return text.split(' ')
            .filter(function(n) { return n != '' })
            .length;
}

const numberOfLetters = (word: string): number => {
    return word.length;
}


function checkForThala(text: string) : string {

    if (findSum(Number(text)) == 7) {
        return "sum of digits is equal to 7";
    }
    else if (numberOfWords(text) == 7) {
        return "number of words are equal 7";
    }
    else if (numberOfWords(text) == 1) {
        if (numberOfLetters(text) == 7) {
            return "number of letters are 7";
        }
    }

    return "!! TRY AGAIN !!";
}

export default checkForThala;
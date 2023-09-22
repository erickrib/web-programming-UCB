const prompt = require('prompt-sync')();

function splitPhrase() {
    let i = false;
    let returnedArray = [];
    while (i != true) {
        i = true
        const str = prompt('Digite o array de cinco numeros separados por vírgula: ');

        const array = str.split(',');
        returnedArray = [];
        if (array.length == 5) {
            for (n of array) {
                n = Number(n);
                if (!isNaN(n)) {
                    returnedArray.push(n);

                } else {
                    i = false;
                }
            }
        } else{
            i = false
        }
    }

    return returnedArray;
}

const phrase = "4,5,6,7,j";
const ro = splitPhrase(phrase);
console.log(ro);
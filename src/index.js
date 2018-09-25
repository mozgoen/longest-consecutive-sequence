module.exports = function longestConsecutiveLength(array) {

    if (array.length === 0) {
        return 0;
    }

    let obj = {};

    for (let i = 0, len = array.length; i < len; i++) {
        obj[array[i]] = array[i];
    }

    let counter = 1;
    let maxCounter = 1;

    for (let key in obj) {
        if (+(obj[+key]) + 1 === +(obj[+key + 1])) {
            counter++;
        } else {
            if (counter > maxCounter) {
                maxCounter = counter;
            }
            counter = 1;
        }
    }
    return maxCounter;

}

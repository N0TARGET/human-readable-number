const first = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine'];
const second = ['', 'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen', 'seventeen', 'eighteen', 'nineteen'];
const third = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];
const fourth = ['', 'one hundred', 'two hundred', 'three hundred', 'four hundred', 'five hundred', 'six hundred', 'seven hundred', 'eight hundred', 'nine hundred'];

module.exports = function toReadable(number) {
    if (number < 10) return first[number];
    if (number === 10) return third[1];
    if (number > 10 && number < 20) {
        return second[String(number).charAt(1)];
    } else if (number > 19 && number < 100) {
        let db = third[String(number).charAt(0)];
        if (String(number).charAt(1) !== '0') db = db + ' ' + first[String(number).charAt(1)]
        return db;
    } else if (number === 100) {
        return fourth[1];
    } else {
        let firstValue = Number(String(number).charAt(0));
        let secondValue = Number(String(number).charAt(1));
        let thirdValue = Number(String(number).charAt(2));

        let db = fourth[firstValue];
        if (secondValue > 0) {
            if (secondValue === 1 && thirdValue === 0) {
                return db + ' ten';
            } else if (secondValue === 1) {
                db = db + ' ' + second[thirdValue]
            } else {
                db = db + ' ' + third[secondValue];
                if (thirdValue > 0) db = db + ' ' + first[thirdValue];
            }
        } else {
            if (thirdValue > 0) db = db + ' ' + first[thirdValue];
        }
        return db;
    }
};


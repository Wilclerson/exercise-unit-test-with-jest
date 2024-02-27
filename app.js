// We declare the function with the exact name "fromEuroToDollar"
const fromEuroToDollar = function(valueInEuro) {
    // Convert the given valueInEuro to dollars
    let valueInDollar = valueInEuro * 1.07;
    // return the dollar value
    return valueInDollar;
}
// We include fromEuroToDollar here as well because it needs to be exported

// We declare the function with the exact name "fromEuroToDollar"
const fromDollarToYen = function(valueInDollar2) {
    // Convert the given valueInEuro to dollars
   let valueInYen = valueInDollar2 * 156.5;
    // return the dollar value
    return valueInYen;
}
// We include fromEuroToDollar here as well because it needs to be exported

// We declare the function with the exact name "fromEuroToDollar"
const fromYenToPound = function(valueInYen) {
    // Convert the given valueInEuro to dollars
    let valueInPound = valueInYen * 0.87;
    // return the dollar value
    return valueInPound;
}
// We include fromEuroToDollar here as well because it needs to be exported
module.exports = { fromEuroToDollar, fromDollarToYen, fromYenToPound }


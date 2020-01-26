function bigestSumOfTwoElements(array) {
    if(array.length <= 0) {
        return false;
    }

    if(array.length == 1) {
        return array[0];
    }

    let tab = array.sort((a,b) => b - a);
    return (tab[0] + tab[1]);
}

console.log(bigestSumOfTwoElements([1,2,3,4])) // => 7
console.log(bigestSumOfTwoElements([])) // => false
console.log(bigestSumOfTwoElements([76])) // => 76
console.log(bigestSumOfTwoElements([23,45,17,12])) // => 68
exports.min = function min(array) {
    if (array == undefined || array.length == 0) return 0;
    let min = array[0];
    for (let i = 1; i < array.length; i++) {
        min = min > array[i] ? array[i] : min;
    }
    return min;
}

exports.max = function max(array) {
    if (array == undefined || array.length == 0) return 0;
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        max = max < array[i] ? array[i] : max;
    }
    return max;
}

exports.avg = function avg(array) {
    if (array == undefined || array.length == 0) return 0;
    let sum = array[0];
    for (let i = 1; i < array.length; i++) {
        sum += array[i];
    }
    return +((sum / array.length).toFixed(2));
}

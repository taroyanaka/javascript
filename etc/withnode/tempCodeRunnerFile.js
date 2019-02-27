// flat and fullflat a.k.a flatten function
unFlattenAry = [1, 2, [3, 4, [5, 6]]];

const flat = (array) => {
    return array.reduce((acc, val) => acc.concat(val), [])
};

console.log(flat(unFlattenAry)); // => [ 1, 2, 3, 4, [ 5, 6 ] ]

const fullFlat = ary => {
    while (ary.some(V => Array.isArray(V))) {
        ary = flat(ary)
    }
    return ary;
}
console.log(fullFlat(unFlattenAry)); // => [ 1, 2, 3, 4, 5, 6 ]
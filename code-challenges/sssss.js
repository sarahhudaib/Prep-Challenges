count = function (ary, classifier) {
    classifier = classifier || String;
    return ary.reduce(function (counter, item) {
        var p = classifier(item);
        counter[p] = counter.hasOwnProperty(p) ? counter[p] + 1 : 1;
        return counter;
    }, {})
};

people = [
    {name: 'Mary', gender: 'girl'},
    {name: 'Paul', gender: 'boy'},
    {name: 'John', gender: 'boy'},
    {name: 'Lisa', gender: 'girl'},
    {name: 'Bill', gender: 'boy'},
    {name: 'Maklatura', gender: 'girl'}
];

// If you don't provide a `classifier` this simply counts different elements:

cc = count([1, 2, 2, 2, 3, 1]);
console.log(cc);

// With a `classifier` you can group elements by specific property:

countByGender = count(people, function (item) {
    return item.gender
});
console.log(countByGender);
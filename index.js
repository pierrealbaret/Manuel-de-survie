const sum = (numberList) => {
    return numberList.reduce((acc, item)=> item + acc, 0);
}

module.exports = {
    sum
}
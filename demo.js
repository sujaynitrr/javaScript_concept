const promise = new Promise((resolve, reject) => {
    reject();
})

promise
    .then(() => {
        console.log('1');
    })
    .catch(() => {
        console.log('2');
    })
    .catch(() => {
        console.log('3');
    })
    .then(() => {
        console.log('5');
    })
    .finally(() => {
        console.log('6');
    })
    .then(() => {
        console.log('7');
    })
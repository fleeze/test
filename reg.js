const str = 'ab+aaaaa'
// console.log(str.replace(/@[^(@|\s)]+\s/g, match => {
//     console.log('reg1', match)
//     return '@me'
// }));
// console.log('======================')
console.log(str.replace(/[^\b-]/g, match => {
    console.log('reg2', match)
    return '='
}));

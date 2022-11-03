const atList = ['@所有人', '@mzw']
const str = '就是打算 @所有人  @所有人@zyk @zyk@mzw'
console.log(str.replace(/@[^@|\s]+\s/g, (match) => {
    console.log(match)
    return `[${match}]`
}));
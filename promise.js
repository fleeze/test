const test = {
    name: 'kk',
    sayName() {
        console.log(this.name)
    }
}

const callFunc = ((callback) => {
    callback()
})

callFunc(test.sayName.bind(test))
const randomDay = () => {
    return Math.floor(Math.random() * 365) + 1
}

const times = 50

const calc = () => {
    const map = {}
    for (let i = 0; i < times; i++) {
        const day = randomDay()
        if (map[day]) {
            console.log('get!!', day)
            return true
        } else {
            map[day] = true
        }
    }
    return false
}

const calcTimes = 100

let resTimes = 0
for (let i = 0; i < calcTimes; i++) {
    const res = calc()
    res  && resTimes ++
}
console.log('resTimes-rate', resTimes / calcTimes)
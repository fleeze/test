const number = 1234567

const formatNumber = (number) => {
    return String(number).replace(/\/d(?=\/d{3, 3})/, ',')
}

console.log(formatNumber(number))

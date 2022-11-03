class AsyncPool {
    constructor(options) {
        this.runningNum = 0
        this.cacheList = []
        this.poolSize = options.size
    }
    run(promiseFunc, params) {
        if (this.runningNum >= this.poolSize) {
            return new Promise(res => {
                this.cacheList.push({ promiseFunc, params, res })
            })
        } else {
            this.runningNum ++
            const p = promiseFunc(params)
            p.then(() => {
                this.runningNum --
                if (!this.cacheList.length) return
                const next = this.cacheList.shift()
                const { promiseFunc, params, res } = next
                this.run(promiseFunc, params).then(res)
            })
            return p
        }
    }
}

const asyncPool = new AsyncPool({ size: 2 })
let index = 0

const genRequest = () => {
    index += 1
    return new Promise((resolve) => {
        const xhr = new XMLHttpRequest();
        const url = `https://jsonplaceholder.typicode.com/todos/${index}`
        xhr.open('get', url)
        xhr.send();
        xhr.onload = function () {
            resolve(xhr.responseText)
        }
    })
}

function runRequest() {
    asyncPool.run(genRequest).then(() => {

    })
    asyncPool.run(genRequest).then((param) => {
    })
    asyncPool.run(genRequest).then((param) => {
    })
    asyncPool.run(genRequest).then((param) => {
    })
    asyncPool.run(genRequest).then((param) => {
    })
}


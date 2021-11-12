//for循环
function pow(n) {
    let result = 1
    for (let i = 1; i <= n; i++) {
        result *= i;
    }
    return result
}
console.log(pow(10))

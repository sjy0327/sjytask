//递归
function fow(n) {
    if (n == 1)
        return n;
    else
        return n * fow(n - 1);

}
console.log(fow(10))

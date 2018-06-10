let fibonacci = function (n) {
    let memo = [0, 1];
    let fib = function (n) {
        let result = memo[n];
        if (typeof result !== 'number') {
            result = fib(n - 1) + fib(n - 2);
            memo[n] = result;
        }
        return result;
    }
    return fib;
}();

for (let i = 0; i < 100; i++) {
    document.writeln(i + ' : ' + fibonacci(i) + "<br>");
}
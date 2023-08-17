var memoizer = function (memo, fundamental) {
    var shell = function (n) {
        var result = memo[n];
        if (typeof result !== 'number') {
            result = fundamental(shell, n);
            memo[n] = result;
        }
        return result;
    };
    return shell;
};

var fibonacci = memoizer( [0, 1],
                          function (sheller, n) {
                                let a = sheller(n - 1) 
                                let b = sheller(n - 2);
                                return a+b
                          }
                );
val = fibonacci(5)
console.log(val)

/*
    fibonacci is set to memorizer, which returns shell
    fibonacci(3): shell is called and n has a value of 3
    In shell now, n is 3:
         * result is undefined (as memo[3] DNE)
         * shell calls the passed in function "fundamental" PASSING ITSELF as 
           the first arg. Therefore, the function that is passed into memo is
           will execute the function shell (it's first argument)                  
            
*/
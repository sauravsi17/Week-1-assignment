/*
    Write a function that returns a promise that resolves after n seconds have passed, where n is passed as an argument to the function.
*/

function wait(n) {

    const res_promise = new Promise(function(resolve, reject){ 
        setTimeout (() => resolve("The promise is resolved"), n)

    })

    return res_promise
}

wait(2000).then(data => console.log(data))

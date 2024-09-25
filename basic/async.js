//line by line code is synchronous
//main stack and side stack

//sync code go in main stack and async code go in side stack and start processing and after emptying main stack it start executing

async function func() {
    let blob = await fetch('https://randomuser.me/api/');
    let ans = await blob.json();
    console.log(ans);
};

// func();

//settimeout
// console.log("1st");
// // from this line webapi is called and further execution of code starts, and afer 3s this is agiain called back in the call stack
// setTimeout(() => {
//     console.log("after 3s");
// }, 3000);
// console.log("2nd");


// THE CALLBACK VERSION
const fakeRequestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Connection Timeout :(')
        } else {
            success(`Here is your fake data from ${url}`)
        }
    }, delay)
}

//writing own promises
//resolve reject and waiting state
// THE PROMISE VERSION 
const fakeRequestPromise = (url) => {
    //methode to write promise
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * (4500)) + 500;
        setTimeout(() => {
            if (delay > 4000) {
                //calling reject
                reject('Connection Timeout :(')
            } else {
                //calling resolve
                resolve(`Here is your fake data from ${url}`)
            }
        }, delay)
    })
}

//callback hell !!!!!!!!

// fakeRequestCallback('books.com/page1',
//     function (response) {
//         console.log("IT WORKED!!!!")
//         console.log(response)
//         fakeRequestCallback('books.com/page2',
//             function (response) {
//                 console.log("IT WORKED AGAIN!!!!")
//                 console.log(response)
//                 fakeRequestCallback('books.com/page3',
//                     function (response) {
//                         console.log("IT WORKED AGAIN (3rd req)!!!!")
//                         console.log(response)
//                     },
//                     function (err) {
//                         console.log("ERROR (3rd req)!!!", err)
//                     })
//             },
//             function (err) {
//                 console.log("ERROR (2nd req)!!!", err)
//             })
//     }, function (err) {
//         console.log("ERROR!!!", err)
//     })







// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then(() => {
//         console.log("IT WORKED!!!!!! (page1)")
//         fakeRequestPromise('yelp.com/api/coffee/page2')
//             .then(() => {
//                 console.log("IT WORKED!!!!!! (page2)")
//                 fakeRequestPromise('yelp.com/api/coffee/page3')
//                     .then(() => {
//                         console.log("IT WORKED!!!!!! (page3)")
//                     })
//                     .catch(() => {
//                         console.log("OH NO, ERROR!!! (page3)")
//                     })
//             })
//             .catch(() => {
//                 console.log("OH NO, ERROR!!! (page2)")
//             })
//     })
//     .catch(() => {
//         console.log("OH NO, ERROR!!! (page1)")
//     })


// THE CLEANEST OPTION WITH THEN/CATCH
// RETURN A PROMISE FROM .THEN() CALLBACK SO WE CAN CHAIN!
// fakeRequestPromise('yelp.com/api/coffee/page1')
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page1)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page2')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page2)")
//         console.log(data)
//         return fakeRequestPromise('yelp.com/api/coffee/page3')
//     })
//     .then((data) => {
//         console.log("IT WORKED!!!!!! (page3)")
//         console.log(data)
//     })
//     .catch((err) => {
//         console.log("OH NO, A REQUEST FAILED!!!")
//         console.log(err)
//     })






//async with promises
//async function by default return 
const f = async ()=>{
    //to stop exectuion of fuction custom
    //throw "error message"
    console.log("hello f")
};

// f()
//     .then(() => {
//         console.log("hello then")
//     })

const login = async (username, password) => {
    if (!username || !password) throw 'Missing Credentials'
    if (password === 'corgifeetarecute') return 'WELCOME!'
    throw 'Invalid Password'
}

// login('todd', 'corgifeetarecute')
//     .then(msg => {
//         console.log("LOGGED IN!")
//         console.log(msg)
//     })
//     .catch(err => { 
//         console.log("ERROR!")
//         console.log(err)
//     })


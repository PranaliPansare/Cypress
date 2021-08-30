// const { resolve, reject } = require("cypress/types/bluebird");

// const { resolve, reject } = require("cypress/types/bluebird")
// const { rest } = require("cypress/types/lodash")

// let cypressNew = new Promise((resolve,reject)=>{
//     let new = 10
//     if (new == 34) {
//         resolve('Promised is fulfilled')
//     }
//     else {
//         reject('Promised not  fulfilled')
//     }


// })
// cypressNew.then((msg) =>{
//     console.log(msg)
// }).catch((msg)=>{
//     console.log(msg)

// })

function mul(x, y) {
    console.log(`Multiply ${x * y}`)
}
let cypress = new Promise((resolve, reject) => {
    let info = {
        firstName: "pranali",
        age: 22,
        rollNo: 68
    }
    let noinfo = {
        error: 123,
        msg: 'Check the error'



    }
    if (info.hasOwnProperty('firstName')) {
        resolve(info)
    }
    else {
        reject(noinfo)
    }



})

cypress.then((info) => {
    // console.log(info)
    if (info.hasOwnProperty('firstName') && info.hasOwnProperty('age')) {

        mul(44, 13)
    }

}).catch((noinfo) => {
    console.log(`error ${noinfo.error} and message  ${noinfo.msg}`)
})

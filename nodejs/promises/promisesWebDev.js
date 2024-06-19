// function watchTutorialCallback(callback, errorCallback) {
//     let userLeft = false
//     let userWatchingCatMeme = true
  
//     if (userLeft) {
//       errorCallback({
//         name: 'User Left', 
//         message: ':('
//     })
// } else if (userWatchingCatMeme) {
//     errorCallback({
//         name: 'User Watching Cat Meme',
//         message: 'WebDevSimplified < Cat' 
//     })
// } else {
//     callback('Thumbs up and Subscribe')
// }
// }

// watchTutorialCallback(message => {
//   console.log(message)
// }, error => {
//   console.log(error.name + ' ' + error.message)
// })

// function watchTutorialPromise() {
//     let userLeft = false
//     let userWatchingCatMeme = false
//     return new Promise((resolve, reject) => {
//         if (userLeft) {
//             reject({
//                 name: 'User Left', 
//                 message: ':('
//             })
//         } else if (userWatchingCatMeme) {
//             reject({
//                 name: 'User Watching Cat Meme',
//                 message: 'WebDevSimplified < Cat' 
//             })
//         } else {
//             resolve('Thumbs up and Subscribe')
//         }
//     })
// }


// watchTutorialPromise().then(message => {
//     console.log(message)
// }).catch(error => {
//     console.log(error.name + ' ' + error.message)
// })

const recordVideoOne = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Video 1 Recorded')
    }, 4000);
})

const recordVideoTwo = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Video 2 Recorded')
    }, 2000);
})

const recordVideoThree = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('Video 3 Recorded')
    }, 3000);
})

Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(messages => {
    console.log(messages)
})

Promise.race([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
]).then(message => {
    console.log(message)
})
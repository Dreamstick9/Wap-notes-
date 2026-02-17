// let newPromise = new Promise((resolve, reject)=>{
//     let a = 5;
//     let b= 6;
    

//     if(a==b){
//         resolve('Promise are fulfilled..')
//     }else{
//         reject('Promise are not fullfiled..')
//     }
// })


// newPromise
// .then((data)=>{
//     console.log('Succecfull data', data)
// })

// .catch((error)=>{
//     console.log('Failed data : ', error)
// })

// .finally(()=>{
//     console.log('Promise are done or not')
// })

// // COIN TOSS
// let cointoss = new Promise((resolve, reject)=>{
//     let data = Math.random()
//     if(data>0.5){
//         resolve("Head")
//     }else{
//         reject("Tails")
//     }
// })

// cointoss
// .then(function(dop){
//     console.log(`${dop} wonnn!!!1`)
// })
// .catch(function(error){
//     console.log(`${error} won bruhhh!!!`)
// })
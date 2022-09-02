console.log('first');
// setTimeout(()=>{
//     console.log('this is last one')
// },5000)
// setInterval(()=>{
//     console.log('tik tik tik tik');
// },3000)
let seconds = 0;
const timeId = setInterval(()=>{
    // seconds++;
    console.log(++seconds);
    if(seconds > 10){
        clearInterval(timeId);
    }
},1000)
console.log('second');
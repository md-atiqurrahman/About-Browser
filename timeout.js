function doSomething(){
    console.log('i love coding');
}
console.log('First: i am the first man');
console.log('Second: i am the second one');
// doSomething();
// setTimeout(doSomething,5000);
setTimeout(function(){
    console.log('js run via v8 engine');
},6000);
setTimeout(() =>{
    console.log('i started salat today');
},4000)
console.log('Third: ami tin nombor bacca');
console.log('Fourth: the fourth will power');

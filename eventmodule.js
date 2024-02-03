const EventEmitter = require('events');
class MyEmitter extends EventEmitter { }
const myEmitter = new MyEmitter();
myEmitter.on('TankerFull', () => {
    console.log("Please turn off the motor tanker is filled!"
    );
    setTimeout(()=>{
        console.log("The tanker is filled")
    },3000)
},)
console.log("Tanker is  filling"),
    myEmitter.emit('TankerFull');
class Chronometer {
  constructor() {
    this.currentTime= 0
    this.intervalId=null
 }

 start(callback) {
    this.intervalId= setInterval(() =>{
      this.currentTime=this.currentTime+1
      if(callback){
        callback()
      }
    },1000)

    

  }

  getMinutes() {
    
    return Math.floor(this.currentTime/60)

  }

  getSeconds() {
    return Math.floor(this.currentTime%60)
  }

  computeTwoDigitNumber(value) {
    if(value<10)
    { return "0"+ value 

    }
    else{
     return "" + value
     }

  }

  stop() {
   clearInterval(this.intervalId) 
   this.currentTime=0
   this.intervalId=null
  }

  reset() {
    this.stop()

    this.start()
  }

  split() {
    let minutes=this.getMinutes()
    let seconds=this.getSeconds()
    return this.computeTwoDigitNumber(minutes) + ":" +this.computeTwoDigitNumber(seconds)

  }
}

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = Chronometer;
}

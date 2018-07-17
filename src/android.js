const Robot = require('./robot')
class Android extends Robot {
  constructor() {
    super(`This robot is an android.`)
    this._isSentient = false
  }
}

const robot = new Robot()
const android = new Android()
robot.meet(android)
console.log(robot, android)

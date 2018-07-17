const shortId = require('shortid')

class Robot {
  constructor(description) {
    this._id = shortId()
    this._description = description || null
    this._network = []
  }

  get id() {
    return this._id
  }

  set id(val) {
    throw new Error('YOU CAN NOT EDIT MY ID')
  }

  get description() {
    return this._description
  }

  set description(val) {
    if (val === '') {
      throw new ERROR('NEED A DESCRIPTION')
    }
    this._description = val
  }

  get network() {
    return this._network
  }

  set network(val) {
    throw new ERROR(`CAN'T ADD TO THE NETWORK`)
  }

  sayHello(phrase) {
    return `${phrase}, my identifier is ${this.id}`
  }

  meet(robot) {
    if (robot instanceof Robot === false) {
      throw new ERROR(`INSERT ROBOT`)
    }
    this.network.push(robot.id)
    robot.network.push(this.id)
  }
}

// const robotA = new Robot('This is my first robot')
// const robotB = new Robot('This is my second robot')
//
// console.log(robotA.id, robotB)

// const robot = new Robot()
// robot.sayHello()

module.exports = Robot

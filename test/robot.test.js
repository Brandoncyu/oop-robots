const {expect} = require('chai')
const Robot = require('../src/robot')

describe('Robot', function() {
  describe('new Robot()', function() {
    it('should randomly generate a unique id upon creation', function() {
      const robot = new Robot()
      expect(robot.id).to.be.ok

      const robot2 = new Robot()
      expect(robot.id).to.not.equal(robot2.id)
    })
    it('should allow for a description property to be set in the constructor', function() {
      const description = 'This is a description'
      const robot = new Robot(description)
      expect(robot.description).to.equal(description)
    })
    it('if the description is not set, it should be null', function() {
      const robot = new Robot()
      expect(robot.description).to.be.null
    })
  })

  describe('get id', function() {
    it('should return the id of the robot', function() {
      const robot = new Robot()
      expect(robot.id).to.be.ok
    })
  })

  describe('set id', function() {
    it('should throw an error if an attempt is made to change the id', function() {
      const robot = new Robot()
      const actual = () => robot.id = false
      expect(actual).to.throw()
    })
  })

  describe('get description', function() {
    it('should return the description', function() {
      const myDesc = 'yo'
      const robot = new Robot(myDesc)
      expect(robot.description).to.equal(myDesc)
    })
  })

  describe('set description', function() {
    it('should throw an error if the value is empty', function() {
      const robot = new Robot()
      const actual = () => robot.description = ''
      expect(actual).to.throw()
    })
    it('should set the description of the robot', function() {
      const myDesc = 'Scrambled eggs'
      const robot = new Robot(myDesc)
      expect(robot.description).to.equal(myDesc)
    })
  })

  describe('get network', function() {
    it('should return an array of all the ids the robot has met', function() {
      const robot = new Robot()
      expect(robot.network).to.be.ok
      expect(robot.network).to.be.an('array')
    })
  })

  describe('set network', function() {
    it('should throw an error if an attempt is made to change the network', function() {
      const robot = new Robot()
      const actual = () => robot.network = 'Wes'
      expect(actual).to.throw()
    })
  })

  describe('#meet()', function() {
    it('should have a meet function that takes another instance of a robot', function() {
      const robotA = new Robot()
      const robotB = new Robot()

      const actual = () => robotA.meet(robotB)
      expect(actual).to.not.throw()
    })
    it('should throw an error if the inserted value is not a robot instance', function() {
      const robotA = new Robot()

      const actual = () => robotA.meet()
      expect(actual).to.throw()
    })
    it('should add the robots ids to each other\'s networks', function() {
      const robotA = new Robot()
      const robotB = new Robot()
      const robotC = new Robot()

      robotA.meet(robotB)
      robotA.meet(robotC)

      expect(robotA.network).to.deep.equal([robotB.id, robotC.id])
      expect(robotB.network).to.deep.equal([robotA.id])
      expect(robotC.network).to.deep.equal([robotA.id])
    })
  })
})

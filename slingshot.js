class slingshot{
    constructor(bodyA,bodyB){
  var options = {
      bodyA:bodyA,
      bodyB:bodyB,stiffness:0.04,length:10
  }
  this.sling=Constraint.create(options)
  World.add(world,this.sling)
    }
    display(){
     var stringA = this.sling.bodyA.position
     var stringB = this.sling.bodyB.position
     strokeWeight(4)
     line (stringA.x,stringA.y,stringB.x,stringB.y)
    }
}
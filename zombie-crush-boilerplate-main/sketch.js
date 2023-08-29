const Engine = Matter.Engine;
const Render = Matter.Render;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
const Body = Matter.Body;
const Composites = Matter.Composites;
const Composite = Matter.Composite;
let engine;
let world
var jointpint
var jointhtml
var lewall, riwall
var ground, bridge
var stones=[]


function setup() {
  createCanvas(windowWidth, windowHeight);
  engine = Engine.create();
  world = engine.world;
  frameRate(60);
  ground=new Base(0,height-10, width*2,20,"#FF69B4",true)
  lewall=new Base(300, height /3 +70,700,10,"#05f52d",true)
  riwall = new Base(width -300,height/2+50,700,10,"#f50505",true)
  bridge = new Bridge(30,{x:width/2-600,y:height/5})
  jointpint = new Base(width-300,height/5+100,40,20,"#FF69B4",true)

  Matter.Composite.add(bridge.body,jointpint)
  jointhtml = new Link(bridge,jointpint)

  for(var i=0; i <=8;i++){
    var x =random(width/2-300,width/2+600)
    var y = random(-40,100)
    var stone = new Stone(x,y,90,90)
    stones.push(stone)
  }

}

function draw() {
  background(51);
  Engine.update(engine);
 ground.show()
 lewall.show()
 riwall.show()
 bridge.show()
 for(var stone of stones){
  stone.show()
 }
}

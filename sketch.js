const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var maxDrops = 100;
var drops = [];

function preload(){
    
}

function setup(){
   createCanvas(700,700);
   for(var i = 0;i<maxDrops;i++){
       drops.push(new Drops(random(0,400),random(0,400)));
   }

    
}

function draw(){
    background("black");

    drops.display();
    drops.update();
}   


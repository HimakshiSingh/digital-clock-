function setup() {
  createCanvas(400,400);
  angleMode(DEGREES)
}

function draw() {

  background("black"); 
  translate(200,200) 
  rotate(-90)

  var hr = hour();
  var mn = minute();
  var sc = second();



  stroke ("white")
  textSize(40)
  noFill()
  text( hr + ':' + mn + ':' + sc , 10,200)

  
  strokeWeight(4)
  noFill()
  stroke(255,0,0)
  var end = map(sc,0,60,0,360)
  arc(0,0,300,300,0,end)

 

  stroke(0,0,255)
  var end1 = map(mn,0,60,0,360)
  arc(0,0,280,280,0,end1)

  stroke(150,255,100)
  var end2 = map(hr % 12,0,12,0,360)
  arc(0,0,260,260,0,end2)

  push()
  rotate(end)
  stroke(255,0,0)
  line(0,0,100,0)
  pop ()

  push()
  rotate(end1)
  stroke(0,0,255)
  line(0,0,80,0)
  pop ()

  push()
  rotate(end2)
  stroke(150,255,100)
  line(0,0,60,0)
  pop ()
  
}
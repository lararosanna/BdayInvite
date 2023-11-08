function preload(){
  font = loadFont("Rubik-Medium.ttf")
}

function setup() {
  createCanvas(1000, 1000);
  gi = loadImage("https://media0.giphy.com/media/v1.Y2lkPTc5MGI3NjExamlsZmZ6MHNlMjEzNjBranhjOTgwczBma2Z6bmZrc21rZ2w2aTBicCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3d63YDxRJRtkZepvGm/giphy.gif")
  textAlign(CENTER)
}

function draw() {
  
  background(220);
  image(gi,0,0,width,height)
  textSize(50)
  text("🦋                     🦋", width/2, 250)  
  push()
  textFont(font)
  text("LARA'S 21st", width/2, 250)
  text("DATE: 16th december", width/2, 350)
  text("TIME: 7pm", width/2, 450)

  text("LOCATION: brixton jamm", width/2, 550)
  text("DRESS CODE: formal", width/2, 650)
  text("food and drink provided", width/2, 750)
  strokeWeight(5)
  line(15,15,width-15,15)
  line(15,height - 15, 15,15)
  line(width -15, 15, width -15,height -15)
  line(15,height -15,width-15, height -15)
  pop()
  



  
}
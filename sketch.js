var path,carro1, leftBoundary,rightBoundary;
var pathImg,boyImg;
var i;
var carro2,rua;
var carroIMG,carro2IMG,ruaIMG ;


function preload(){
  //loadImage (carregarImagem) da pista)
  pathImg = loadImage("path.png");
  //loadAnimation (carregarAnimação) de corrida para o menino
  boyImg = loadImage("carro1-removebg-preview.png");
  ruaIMG = loadImage("path copy.png");
  carro2IMG = loadImage("carro2-removebg-preview.png");
  obstaculo1 = loadImage("obstaculo1.png");
  obstaculo2 = loadImage("obstaculo2.png");
  obstaculo3 = loadImage("obstaculo3.png");
}

function setup(){
  createCanvas(1360, windowWidth);
 //crie um sprite para a pista
 path = createSprite(270,300); 
//adicione uma imagem para a pista
 path.addImage(pathImg);
//Faça com que a pista seja um fundo que se move dando a ela velocity Y.
path.velocityY = -4;
path.scale=1.2;

rua2 = createSprite(1000,300);
rua2.addImage(ruaIMG);
rua2.scale=1.2;

carro2 = createSprite(1010,600,10,30); 
carro2.addImage("andando",carro2IMG);
carro2.scale=0.4,5;
//crie um sprite de menino
carro1 = createSprite(290,600,10,30); 
//adicione uma animação de corrida para ele
carro1.addAnimation("JakeRunning",boyImg);
carro1.scale=0.4;


//crie um limite à esquerda
//leftBoundary=createSprite(0,0,100,1500);

//meio=createSprite(465,0,80,7000)

//defina visibilidade como falsa para o limite à esquerda


//crie um limite à direita
//rightBoundary=createSprite(410,0,100,800);
//defina visibilidade como falsa para o limite à direita
//rightBoundary.visible = false;
}

function draw() {
  background(0);
  path.velocityY = 4;
  rua2.velocityY = 4;
  if(keyDown("a")){
    carro1.x = carro1.x - 7;
  }
  if(keyDown("d")){
      carro1.x = carro1.x + 7;
  }
  if(keyDown("w")){
    carro1.y = carro1.y + -7;
  }
  if(keyDown("s")){
  carro1.y = carro1.y + 7;
  }
  if(keyDown("left_arrow")){
    carro2.x = carro2.x - 7;
  }
  if(keyDown("right_arrow")){
      carro2.x = carro2.x + 7;
  }
  if(keyDown("up_arrow")){
    carro2.y = carro2.y + -7;
  }
  if(keyDown("down_arrow")){
  carro2.y = carro2.y + 7;
  }
  // mover o menino com o mouse usando mouseX
  //carro1.x = World.mouseX;
  //carro1.Y = World.mouseY;
  edges= createEdgeSprites();
  carro1.collide(edges[3]);
  // colidir o menino com os limites invisíveis da esquerda e da direita
  //carro1.collide(rightBoundary);
  
  //código para redefinir o fundo
  if(path.y > 610 ){
    path.y = height/2;
  }
  if(rua2.y > 610 ){
    rua2.y = height/2;
  }

  spawnObstacles()

  drawSprites();
}
function spawnObstacles(){
  if (frameCount % 240 === 0) {
    var obstaculo = createSprite(200, -50);
    //adicione a função aleatória
    obstaculo.x = Math.round(random(130,450));
    switch(random) {
      case 1: obstaculo.addImage(obstaculo1,"obstaculo1");
              break;
      case 2: obstaculo.addImage(obstaculo2);
              break;
      case 3: obstaculo.addImage(obstaculo3);
              break;
      default:break;
    }
    obstaculo.velocityY = 7;
    //atribuir tempo de vida para a porta, escalador e bloco invisível
    obstaculo.lifetime = 800;
  }
}
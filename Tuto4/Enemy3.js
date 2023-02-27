const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH=canvas.width =500;
const CANVAS_HEIGHT=canvas.height =1000;
const numberofEnemies = 100;
const enemiesArray =[];

// const enemyImage = new Image;
// enemyImage.src = 'Images\\enemy1.png';
let gameFrame =0;


class Enemy {

    constructor(){

        this.image = new Image();
        this.image.src= 'Images\\enemy3.png';

        this.speed=Math.random()*4+1;
        this.spriteWidth=218;
        this.spriteHeight=177;
        this.width=this.spriteWidth/2.5;
        this.height=this.spriteHeight/2.5;

        this.x=Math.random()*(canvas.width-this.width);
        this.y=Math.random()*(canvas.height-this.height);
        this.frame=0;
        this.flapSpeed=Math.floor(Math.random()*3+1);
        this.angleSpeed=Math.random()*2+0.5;
        this.angle= Math.random();
        this.curve=Math.random()*200+50;


    }

    update(){

        this.x= this.curve*Math.sin(this.angle*Math.PI/90)+canvas.width/2-this.width;
        this.y=this.curve*Math.cos(this.angle*Math.PI/500)+canvas.height/2-this.height;
        this.angle+=this.angleSpeed;
        

        if(this.x+this.width<0) this.x=canvas.width;

        if(gameFrame%this.flapSpeed ===0)
        {  this.frame >4? this.frame =0: this.frame++;}
      

    }

    draw(){

        ctx.strokeRect(this.x,this.y,this.width,this.height);
        ctx.drawImage(this.image, this.frame*this.spriteWidth,0,this.spriteWidth,this.spriteHeight, this.x, this.y, this.width, this.height);

    }


};

for (let i=0;i<numberofEnemies;i++)

{

    enemiesArray.push(new Enemy());

}



function animate()

{

    ctx.clearRect(0,0,CANVAS_WIDTH, CANVAS_HEIGHT);
    enemiesArray.forEach(enemy => 
        {

            enemy.update();
            enemy.draw();


        }
        
        
        
        );

        gameFrame++;
    requestAnimationFrame(animate);

}

animate();





function Hero(image, top, left, size,speed) {
    this.image = image;
    this.top = top;
    this.left = left;
    this.size = size;
    this.speed=speed;

    this.getHeroElement = function () {
        return '<img width="' + this.size + '"' +
            ' height="' + this.size + '"' +
            ' src="' + this.image + '"' +
            ' style="top: ' + this.top + 'px; left:' + this.left + 'px;position:absolute;" />';
    };

    this.moveRight = function () {
        this.left += this.speed;
    };
    this.moveDown = function () {
        this.top += this.speed;
    };
    this.moveLeft = function () {
        this.left -= this.speed;
    };
    this.moveUp = function () {
        this.top -= this.speed;
    };


}

var hero = new Hero('ball.png', 0, 0, 200,100);
let flag = 1;

function start() {
    if (flag === 1) {
        if (hero.left < window.innerWidth - hero.size) {
            hero.moveRight();
        } else {
            flag = 2
        }
    }
    if (flag === 2) {
        if(hero.top<window.innerHeight-hero.size){
            hero.moveDown();
        }else {
            flag=3;
        }
    }
    if(flag===3){
        if (hero.left>0){
            hero.moveLeft();
        }else {
            flag=4
        }
    }
    if(flag===4){
        if(hero.top>0){
            hero.moveUp();
        }else {
            flag=1
        }
    }
    document.getElementById('game').innerHTML = hero.getHeroElement();
    setTimeout(start, 100)
}

start();
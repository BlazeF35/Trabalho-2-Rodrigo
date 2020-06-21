
function Sprite(x, y, largura, altura){
    this.x = x;
    this.y = y;
    this.largura = largura;
    this.altura = altura;

    this.desenha = function (xCanvas, yCanvas) {
        ctx.drawImage(img,this.x, this.y, this.largura, this.altura, xCanvas, yCanvas, this.largura, this.altura);
    }
}

var bg = new Sprite(0, 0, 600, 600)
R2D2 = new Sprite(632, 22, 78, 78)
play = new Sprite(127, 603, 397, 347)
perdeu = new Sprite(478, 603, 500, 357)
venceu = new Sprite(651, 175, 312, 409)
Storm = new Sprite(751, 261, 50, 120);

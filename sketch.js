function setup() {
    createCanvas(500, 800);
    board = new Board(10, 10);
    figure = new Figure("no", "0");
}

function draw() {
    background(100);
    board.draw()
    figure.currentField();
}
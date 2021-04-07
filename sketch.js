function setup() {
    createCanvas(500, 800);
    board = new Board(10, 10);
}

function draw() {
    background(100);
    board.draw()
}
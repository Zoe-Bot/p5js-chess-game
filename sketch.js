setup = () => {
    createCanvas(500, 800)
    board = new Board(10, 10)
    figure = new Figure("no", "0")
}

draw = () =>{
    background(100)
    board.update()
    board.draw()
}

mouseClicked = () => {
    board.setField()
}
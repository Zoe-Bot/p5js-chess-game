class Board {
    constructor() {
        this.x = 0
        this.y = 0
        this.fieldSize = 50
        this.clickedField = {
            current : "",
            next : ""
        }
        
        this.board = [
            [new Tower("black"), new Horse("black"), new Runner("black"), new Queen("black"), new King("black"), new Runner("black"), new Horse("black"), new Tower("black")],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            ["", "", "", "", "", "", "", ""],
            [new Tower("white"), new Horse("white"), new Runner("white"), new Queen("queen", "white"), new King("white"), new Runner("white"), new Horse("white"), new Tower("white")]
        ]
    }

    draw = () => {
        this.drawBoard();
    }

    update = () => {
        this.currentField()
    }

    currentField = () => {
        let boardsize = this.fieldSize * 8;
        let currentX = Math.floor(mouseX / this.fieldSize);
        let currentY = Math.floor(mouseY / this.fieldSize);

        let mouseField = {
            x : currentX,
            y : currentY
        }
        if (mouseX < boardsize && mouseX > 0 & mouseY < boardsize && mouseY > 0) {
            //console.log(this.board[currentY][currentX])
            //console.log("X: " + currentX)
            //console.log("Y: " + currentY)
            return mouseField;
        }
        return ""
    }

    setField = () => {
        if (this.currentField() == "")
            return

        this.clickedField.current = this.currentField();
        this.clickedField.next = this.currentField() + 150;

        //this.board[this.clickedField.current.y - 1][this.clickedField.current.x - 1] = this.board[this.clickedField.next.y - 1][this.clickedField.next.x - 1]
        //this.board[this.clickedField.current.y - 1][this.clickedField.current.x - 1] = ""
    }

    drawBoard = () => {
        this.y = 0
        let colorCheck = 0
        this.board.forEach((e) => {
            e.forEach((field, i) => {
                let cache = this.x + i * this.fieldSize
                colorCheck % 2 == 0 ? fill(0, 0, 0) : fill(255, 255, 255);
                colorCheck++;
                rect(cache, this.y, this.fieldSize, this.fieldSize);

                //console.log(field.player);
                if (field.player == "black")
                    fill(50, 50, 50)
                else
                    fill(200, 200, 200)

                ellipseMode(CORNER);
                switch (field.name) {
                    case "tower":
                        ellipse(cache, this.y, this.fieldSize, this.fieldSize);
                }
            })
            colorCheck % 2 == 0 ? colorCheck++ : colorCheck--;
            this.y += this.fieldSize;
        })
    }
}
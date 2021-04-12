class Board {
    constructor() {
        this.x = 0
        this.y = 0
        this.fieldSize = 50
        
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
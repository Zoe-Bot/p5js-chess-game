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
            ["", "", "", "", "", "", "", ""]
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
                colorCheck % 2 == 0 ? fill(50, 50, 50) : fill(200, 200, 200);
                colorCheck++;
                rect(cache, this.y, this.fieldSize, this.fieldSize);

                console.log(field.player)
                if (field.player == "black")
                    fill(50, 50, 50)
                else
                    fill(200, 200, 200)

                ellipseMode(CORNER);
                switch (field.constructor.name) {
                    case "Tower":
                        console.log("touchStarted()")
                        ellipse(cache, this.y, this.fieldSize, this.fieldSize);
                }
            })
            colorCheck % 2 == 0 ? colorCheck++ : colorCheck--;
            this.y += this.fieldSize;
        })
    }
}
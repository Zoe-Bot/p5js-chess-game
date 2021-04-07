class Board {
    constructor() {
        this.x = 0
        this.y = 0
        this.fieldSize = 50
        this.black = {
            queen : "Queen",
            king : "King",
            tower : "tower",
            horse : "Horse",
            runner : "Runner",
            pawn : "Pawn"
        }
        this.white = {
            queen : "Queen",
            king : "King",
            tower : "Tower",
            horse : "Horse",
            runner : "Runner",
            pawn : "Pawn"
        }
        
        this.board = [
            [this.black.tower, this.white.tower, this.black.runner, this.black.king, this.black.queen, this.black.runner, this.black.horse, this.black.tower],
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
                colorCheck % 2 == 0 ? fill(0, 0, 0) : fill(255, 255, 255);
                colorCheck++;
                rect(cache, this.y, this.fieldSize, this.fieldSize);

                if (field in this.black)
                    fill(50, 50, 50)
                else
                    fill(200, 200, 200)

                ellipseMode(CORNER);
                switch (field) {
                    case this.black.tower:
                    case this.white.tower:
                        ellipse(cache, this.y, this.fieldSize, this.fieldSize);
                }
            })
            colorCheck % 2 == 0 ? colorCheck++ : colorCheck--;
            this.y += this.fieldSize;
        })
    }
}
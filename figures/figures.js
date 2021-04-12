class Figure {
    constructor(name, player) {
        this.name = name;
        this.player = player;
    }

    currentField = () => {
        if (mouseX < 50 * 8 && mouseX > 0 & mouseY < 50 * 8 && mouseY > 0) {
            console.log("in board")
        }
    }
}
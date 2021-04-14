class Pawn extends Figure {
    constructor(player) {
        super();
        this.name = "pawn";
        this.player = player;
    }

    render = () => {

    }

    update = () => {
        this.validMove();
        this.validAttack();
    }

    validMove = () => {

    }

    validAttack = () => {

    }
}
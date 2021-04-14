class Horse extends Figure {
    constructor(player) {
        super();
        this.name = "horse";
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
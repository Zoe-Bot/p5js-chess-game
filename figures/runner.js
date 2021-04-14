class Runner extends Figure {
    constructor(player) {
        super();
        this.name = "runner";
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
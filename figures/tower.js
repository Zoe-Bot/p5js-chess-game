class Tower extends Figure {
    constructor(player) {
        super();
        this.name = "tower";
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
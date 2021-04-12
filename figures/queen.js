class Queen extends Figure {
    constructor(player) {
        super();
        this.name = "queen";
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
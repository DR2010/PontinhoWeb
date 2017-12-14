class SimpleGame {

    phaserKeys: string;
    GAME_WIDTH: number;
    GAME_HEIGHT: number;
    listofcards: Phaser.Group;
    lastdiscarded: Phaser.Sprite;
    button: Phaser.Button;

    constructor() {

        this.GAME_WIDTH = 1080;
        this.GAME_HEIGHT = 720;
        this.game = new Phaser.Game(this.GAME_WIDTH, this.GAME_HEIGHT, Phaser.AUTO, '', { preload: this.preload, create: this.create, update: this.update, init: this.init, render: this.render });
    }

    game: Phaser.Game;

    preload() {
        HelperPontinho.loadAllImages(this.game);

        //this.game.load.spritesheet('button', 'assets/buttons/button_sprite_sheet.png', 193, 71);
        //this.game.load.image('background', 'assets/misc/starfield.jpg');

        this.game.load.spritesheet('button', 'images/tux.png', 193, 71);
        this.game.load.image('background', 'assets/misc/starfield.jpg');

    }

    create() {

        this.game.stage.backgroundColor = "#1bb01b";
        this.game.physics.startSystem(Phaser.Physics.ARCADE);

        let discardedpilepos = new position(700, 50);

        // cards
        this.listofcards = this.game.add.group();

        this.lastdiscarded = this.game.add.sprite(discardedpilepos.x, discardedpilepos.y, 'club_7');

        let posx = this.game.world.width;
        let posy = this.game.world.height;

        posx = 50;
        posy = 50;

        this.listofcards[0] = this.game.add.sprite(posx, posy, 'club_2');
        this.listofcards[1] = this.game.add.sprite(posx += 20, posy, 'club_3');
        this.listofcards[2] = this.game.add.sprite(posx += 20, posy, 'club_4');
        this.listofcards[3] = this.game.add.sprite(posx += 20, posy, 'club_5');
        this.listofcards[4] = this.game.add.sprite(posx += 20, posy, 'club_6');

        this.button = this.game.add.button(this.game.world.centerX - 95, 400, 'button', this.actionOnClick, this, 2, 1, 0);

        this.button.onInputOver.add(SimpleGame.over, this);
        this.button.onInputDown.add(this.actionOnClick, this);


    }

    static over() {
        console.log('button over');
    }

    actionOnClick() {

        if (this.game.stage.backgroundColor = "#ff005a") {
            this.game.stage.backgroundColor = "#1bb01b";
        }
        else {
            this.game.stage.backgroundColor = "#ff005a";
        }

    }

    update()
    {
    }

    render() {
    }

    init() {
        // Listen to space & enter keys
        var keys = [Phaser.KeyCode.SPACEBAR, Phaser.KeyCode.ENTER];
        // Create Phaser.Key objects for listening to the state
        this.phaserKeys = this.game.input.keyboard.addKeys(keys);
        // Capture these keys to stop the browser from receiving this event
        this.game.input.keyboard.addKeyCapture(keys);
    }


}

window.onload = () => {

    var game = new SimpleGame();

};



var GAME_WIDTH = 1080;
var GAME_HEIGHT = 720;

//Game Variables
var ship;
var card;
var game;
var listofcards;
var lasers;
var mouseTouchDown = false;
var cursors;
var playertux;
var phaserKeys;
var players;
var platforms;
var discardedpilepos;
var lastdiscarded;

game = new Phaser.Game(GAME_WIDTH, GAME_HEIGHT, Phaser.AUTO, '', { preload: preload, create: create, update: update, init: init, render: render });

function preload() {

    HelperPontinho.loadAllImages(this.game);

}

function init() {
    // Listen to space & enter keys
    var keys = [Phaser.KeyCode.SPACEBAR, Phaser.KeyCode.ENTER];
    // Create Phaser.Key objects for listening to the state
    phaserKeys = game.input.keyboard.addKeys(keys);
    // Capture these keys to stop the browser from receiving this event
    game.input.keyboard.addKeyCapture(keys);
}

function create() {
    game.stage.backgroundColor = "#1bb01b";
    game.physics.startSystem(Phaser.Physics.ARCADE);

    let discardedpilepos = new position(700, 50);

    // cards
    listofcards = game.add.group();

    let posx = game.world.width;
    let posy = game.world.height;

    posx = 50;
    posy = 50;


    listofcards[0] = game.add.sprite(posx, posy, 'club_2');
    listofcards[1] = game.add.sprite(posx += 20, posy, 'club_3');
    listofcards[2] = game.add.sprite(posx += 20, posy, 'club_4');
    listofcards[3] = game.add.sprite(posx += 20, posy, 'club_5');
    listofcards[4] = game.add.sprite(posx += 20, posy, 'club_6');

    lastdiscarded = game.add.sprite(discardedpilepos.x, discardedpilepos.y, 'club_7');

}

function update() {
    playerUpdate();

}

function resetLaser(laser) {
    laser.kill();
}
function createPlayer(x, y, playertype) {
    var player = players.create(x, y, playertype);
    player.body.bounce.y = 0.2;
    player.body.gravity.y = 500;
    player.body.collideWorldBounds = true;


    return player;
}

function playerUpdate() {
    game.physics.arcade.collide(players, players);
    game.physics.arcade.collide(players, platforms);

    players.forEach(function (p) {
        p.body.velocity.x = 0;
        if (cursors.left.isDown) {
            p.body.velocity.x = -150;
        } else if (cursors.right.isDown) {
            p.body.velocity.x = 150;
        }

        if (cursors.up.justDown) {
            // p.body.velocity.y = -450;
            var ground = platforms.create(playertux.x + 42, game.world.height - 180, 'shot');
            ground.body.gravity.y = -750;
        }

    });


    // Loop over the keys
    for (var index in phaserKeys) {
        // Save a reference to the current key
        var key = phaserKeys[index];
        // If the key was just pressed, fire a laser
        if (key.justDown) {
            fireLaser();
        }
    }

    // Game.input.activePointer is either the first finger touched, or the mouse
    if (game.input.activePointer.isDown) {
        // We'll manually keep track if the pointer wasn't already down
        if (!mouseTouchDown) {
            touchDown();
        }
    } else {
        if (mouseTouchDown) {
            touchUp();
        }
    }


}

function createPlatform() {

    for (var i = 0; i < game.world.width; i += 64) {
        var ground = platforms.create(i, game.world.height - 64, 'brick');
        ground.body.immovable = true;
    }

}

function render() {
    //game.debug.text('CodeCaptain Shooting Demo', 10, 30);
    //game.debug.text('Click or press space / enter to shoot', 10, 55);
}

function fireLaser() {
    // Get the first laser that's inactive, by passing 'false' as a parameter
    var laser = lasers.getFirstExists(false);
    if (laser) {
        // If we have a laser, set it to the starting position
        laser.reset(ship.x, ship.y - 20);
        // Give it a velocity of -500 so it starts shooting
        laser.body.velocity.y = -500;
    }

}

function touchDown() {
    // Set touchDown to true, so we only trigger this once
    mouseTouchDown = true;
    fireLaser();
}

function touchUp() {
    // Set touchDown to false, so we can trigger touchDown on the next click
    mouseTouchDown = false;
}
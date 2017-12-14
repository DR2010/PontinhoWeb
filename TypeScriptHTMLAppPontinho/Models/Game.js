var Game = (function () {
    function Game() {
    }
    Game.add = function (gamei) {
        // let game = HelperPontinho.PostX("http:/localhost:65062/api/game", gamei);
        var game = Game.PostX("http://danielmsi.dm:45000/api/game", gamei);
        return game;
    };
    Game.getcurrentgame = function () {
        var gamestring = HelperPontinho.Get("http://danielmsi.dm:45000/api/game");
        var game = new Game;
        game = JSON.parse(gamestring);
        return game;
    };
    Game.PostX = function (yourUrl, datax) {
        var Httpreq = new XMLHttpRequest(); // a new request
        Httpreq.open("POST", yourUrl, false);
        var params = JSON.stringify(datax);
        Httpreq.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        Httpreq.onreadystatechange = function () {
            if (Httpreq.readyState == 4 && Httpreq.status == 200) {
            }
        };
        Httpreq.send(params);
        var ga = new Game();
        ga = JSON.parse(Httpreq.responseText);
        return ga;
    };
    Game.prototype.getplayerscards = function (gameid) {
        var list2 = [];
        // http://danielmsi.dm:45000/api/game/56/cards?status=PLAYERHAND
        var uri = "http://danielmsi.dm:45000/api/game/" + gameid.toString().trim() + "/cards?status=PLAYERHAND";
        var listallplayers = HelperPontinho.Get(uri);
        list2 = JSON.parse(listallplayers);
        return list2;
    };
    return Game;
}());
//# sourceMappingURL=Game.js.map
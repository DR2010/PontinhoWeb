var PlayerGame = (function () {
    function PlayerGame() {
    }
    PlayerGame.prototype.allocatePlayersToGame = function (gameid) {
        var pg = new PlayerGame();
        pg.FKGameID = gameid;
        var playergamex = PlayerGame.Post("http://danielmsi.dm:45000/api/gamecard/" + pg.ID + "/allocatecardtoplayers", pg);
        return playergamex;
    };
    PlayerGame.prototype.getplayerscards = function (playergameid) {
        var list2 = [];
        var uri = "http://danielmsi.dm:45000/api/game/" + playergameid.toString().trim() + "/cards?status=PLAYERHAND";
        var listallplayers = HelperPontinho.Get(uri);
        list2 = JSON.parse(listallplayers);
        return list2;
    };
    PlayerGame.prototype.getplayersgame = function (gameid) {
        var list2 = [];
        // http://danielmsi.dm:45000/api/game/56/players
        var uri = "http://danielmsi.dm:45000/api/game/" + gameid.toString().trim() + "/players";
        var listallplayers = HelperPontinho.Get(uri);
        list2 = JSON.parse(listallplayers);
        return list2;
    };
    PlayerGame.Post = function (yourUrl, datax) {
        var Httpreq = new XMLHttpRequest(); // a new request
        Httpreq.open("POST", yourUrl, false);
        var params = JSON.stringify(datax);
        Httpreq.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        Httpreq.onreadystatechange = function () {
            if (Httpreq.readyState == 4 && Httpreq.status == 200) {
            }
        };
        Httpreq.send(params);
        var ga = new CallResults();
        ga = JSON.parse(Httpreq.responseText);
        return ga;
    };
    return PlayerGame;
}());
//# sourceMappingURL=PlayerGame.js.map
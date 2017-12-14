class Game {

    ID: number;
    GameType: string;

    public static add(gamei) {

        // let game = HelperPontinho.PostX("http:/localhost:65062/api/game", gamei);
        let game = Game.PostX("http://danielmsi.dm:45000/api/game", gamei);
        
        return game;
    }

    public static getcurrentgame() {
        let gamestring = HelperPontinho.Get("http://danielmsi.dm:45000/api/game");

        let game = new Game;
        game = JSON.parse(gamestring);

        return game;

    }

    private static PostX(yourUrl, datax: Game) {
        var Httpreq = new XMLHttpRequest(); // a new request
        Httpreq.open("POST", yourUrl, false);

        var params = JSON.stringify(datax);

        Httpreq.setRequestHeader("Content-Type", "application/json; charset=utf-8");

        Httpreq.onreadystatechange = function () {//Call a function when the state changes.
            if (Httpreq.readyState == 4 && Httpreq.status == 200) {
                // alert(Httpreq.responseText);
            }
        }

        Httpreq.send(params);

        let ga = new Game();
        ga = JSON.parse(Httpreq.responseText);

        return ga;
    }

    public getplayerscards(gameid: number) {

        let list2: Array<GameCards> = [];

        // http://danielmsi.dm:45000/api/game/56/cards?status=PLAYERHAND

        let uri = "http://danielmsi.dm:45000/api/game/" + gameid.toString().trim() + "/cards?status=PLAYERHAND";

        let listallplayers = HelperPontinho.Get(uri);

        list2 = JSON.parse(listallplayers);
        return list2;
    }

}

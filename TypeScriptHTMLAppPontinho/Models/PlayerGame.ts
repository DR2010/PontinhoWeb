class PlayerGame {

    ID: number;
    FKPlayerID: number;
    Name: string;
    FKGameID: number;
    DateJoinedGame: Date;
    PlayerSequence: number;
    PlayersTurn: string;
    PlayerList: Array<Player>;

    public allocatePlayersToGame(gameid: number) {

        let pg = new PlayerGame();
        pg.FKGameID = gameid;

        let playergamex = PlayerGame.Post("http://danielmsi.dm:45000/api/gamecard/" + pg.ID + "/allocatecardtoplayers", pg);

        return playergamex;
    }

    public getplayerscards(playergameid: number) {

        let list2: Array<GameCards> = [];

        let uri = "http://danielmsi.dm:45000/api/game/" + playergameid.toString().trim() + "/cards?status=PLAYERHAND";

        let listallplayers = HelperPontinho.Get(uri);

        list2 = JSON.parse(listallplayers);
        return list2;
    }

    public getplayersgame(gameid : number) {

        let list2: Array<PlayerGame> = [];
        // http://danielmsi.dm:45000/api/game/56/players
        let uri = "http://danielmsi.dm:45000/api/game/" + gameid.toString().trim() + "/players";

        let listallplayers = HelperPontinho.Get(uri);

        list2 = JSON.parse(listallplayers);
        return list2;
    }

    private static Post(yourUrl, datax: PlayerGame) {
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

        let ga = new CallResults();
        ga = JSON.parse(Httpreq.responseText);

        return ga;
    }

}
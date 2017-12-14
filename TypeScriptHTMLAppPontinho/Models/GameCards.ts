class GameCards {

    ID: number;
    FKSuitCardColorID: number;
    FKGameID: number;
    CardIsWhere: string; // PLAYERHAND, PLAYERGAMEONTABLE, PILE, DISCARDED
    DiscardedSequence: number;
    CardLastDiscarded: string;
    IsJoker: string;
    CardIsWithPlayerID: number;
    PlayerHandCardSequence: number;
    CardIsInPlayersGameID: number;
    PlayerGameCardSequence: number;
    PlayerDrawFromPileSequence: number;
    INeedRequested: string;
    CardImageLocation: string;
    ImageName: string;


    public allocatecardstoplayers(gameid: number) {

        let callresults = new CallResults();

        let uri = "http://danielmsi.dm:45000/api/gamecard/" + gameid.toString().trim() + "/allocatecardtoplayers";

        let results = GameCards.PostX(uri, gameid);

        return results;
    }


    private static PostX(yourUrl, datax: number) {
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

var GameCards = (function () {
    function GameCards() {
    }
    GameCards.prototype.allocatecardstoplayers = function (gameid) {
        var callresults = new CallResults();
        var uri = "http://danielmsi.dm:45000/api/gamecard/" + gameid.toString().trim() + "/allocatecardtoplayers";
        var results = GameCards.PostX(uri, gameid);
        return results;
    };
    GameCards.PostX = function (yourUrl, datax) {
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
    return GameCards;
}());
//# sourceMappingURL=GameCards.js.map
var HelperPontinho = (function () {
    function HelperPontinho() {
    }
    HelperPontinho.Get = function (yourUrl) {
        var Httpreq = new XMLHttpRequest(); // a new request
        Httpreq.open("GET", yourUrl, false);
        Httpreq.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        Httpreq.send();
        return Httpreq.responseText;
    };
    HelperPontinho.PostURI = function (yourUrl, params) {
        var Httpreq = new XMLHttpRequest(); // a new request
        Httpreq.open("POST", yourUrl, false);
        Httpreq.setRequestHeader("Content-Type", "application/json; charset=utf-8");
        Httpreq.onreadystatechange = function () {
            if (Httpreq.readyState == 4 && Httpreq.status == 200) {
            }
        };
        Httpreq.send(params);
        return Httpreq.responseText;
    };
    HelperPontinho.loadAllImages = function (game) {
        game.load.image('tux', 'images/tux.png');
        game.load.image('brick', 'images/brick.png');
        game.load.image('ship', 'images/playerShip1_red.png');
        game.load.image('shot', 'images/laserBlue02.png');
        // load card images
        var cardsinfull = new SuitCardColor();
        var listofcards = cardsinfull.listallcardsWebAPI();
        for (var _i = 0, listofcards_1 = listofcards; _i < listofcards_1.length; _i++) {
            var entry = listofcards_1[_i];
            game.load.image(entry.ImageName, 'images/' + entry.CardImage);
        }
        //game.load.image('club_2', 'images/100px-Playing_card_club_2.png');
        //game.load.image('club_3', 'images/100px-Playing_card_club_3.png');
        //game.load.image('club_4', 'images/100px-Playing_card_club_4.png');
    };
    return HelperPontinho;
}());
var position = (function () {
    function position(pos_x, pos_y) {
        this.x = pos_x;
        this.y = pos_y;
    }
    return position;
}());
var area = (function () {
    function area(pos_x0, pos_y0, pos_x1, pos_y1) {
        this.x0 = pos_x0;
        this.y0 = pos_y0;
        this.x1 = pos_x1;
        this.y1 = pos_y1;
    }
    return area;
}());
//# sourceMappingURL=HelperPontinho.js.map
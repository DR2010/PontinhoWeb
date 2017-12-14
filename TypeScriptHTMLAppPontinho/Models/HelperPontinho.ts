class HelperPontinho
{ 
    constructor() {
    }
    public static Get(yourUrl) {
            var Httpreq = new XMLHttpRequest(); // a new request
            Httpreq.open("GET", yourUrl, false);
            Httpreq.setRequestHeader("Content-Type", "application/json; charset=utf-8");
            Httpreq.send();
            return Httpreq.responseText;
    }

    public static PostURI(yourUrl, params: string) {
        var Httpreq = new XMLHttpRequest(); // a new request
        Httpreq.open("POST", yourUrl, false);

        Httpreq.setRequestHeader("Content-Type", "application/json; charset=utf-8");

        Httpreq.onreadystatechange = function () {//Call a function when the state changes.
            if (Httpreq.readyState == 4 && Httpreq.status == 200) {
                // alert(Httpreq.responseText);
            }
        }

        Httpreq.send(params);

        return Httpreq.responseText;
    }


    public static loadAllImages( game ) {
        game.load.image('tux', 'images/tux.png');
        game.load.image('brick', 'images/brick.png');
        game.load.image('ship', 'images/playerShip1_red.png');
        game.load.image('shot', 'images/laserBlue02.png');


        // load card images
        let cardsinfull = new SuitCardColor();
        let listofcards = cardsinfull.listallcardsWebAPI();

        for (let entry of listofcards) {
            game.load.image(entry.ImageName, 'images/'+entry.CardImage);
        }

        //game.load.image('club_2', 'images/100px-Playing_card_club_2.png');
        //game.load.image('club_3', 'images/100px-Playing_card_club_3.png');
        //game.load.image('club_4', 'images/100px-Playing_card_club_4.png');
        

    }

}

class position{

    x: number;
    y: number;

    constructor(pos_x, pos_y) {

        this.x = pos_x;
        this.y = pos_y;
    }
}

class area {

    x0: number;
    y0: number;
    x1: number;
    y1: number;

    constructor(pos_x0, pos_y0, pos_x1, pos_y1) {

        this.x0 = pos_x0;
        this.y0 = pos_y0;
        this.x1 = pos_x1;
        this.y1 = pos_y1;
    }
}

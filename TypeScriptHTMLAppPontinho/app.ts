window.onload = function () {

    var newgamelink = document.getElementById("newgamelink");
    if (newgamelink == null) return false;

    if (newgamelink != null) {
        newgamelink.onclick = function () {

            let game = new Game();
            game.ID = 0;
            game.GameType = "PONTINHO";

            let gameid = Game.add(game);

            alert("Game has been created! "+gameid.ID);
            return false;
        }
    }

    var currentgame = document.getElementById("gamenumber");
    if (currentgame != null) 
    {
        let gamecurrent = Game.getcurrentgame();

        currentgame.setAttribute('value', gamecurrent.ID.toString());

    }

    var allcardsuitlink = document.getElementById("allcardsuitlink");
    if (allcardsuitlink == null) return false;

    allcardsuitlink.onclick = function () {

        var clubs = document.getElementById("Clubs");
        if (clubs == null) { }
        else {
            while (clubs.firstChild) {
                clubs.removeChild(clubs.firstChild);
            }
        }
        var diamonds = document.getElementById("Diamonds");
        if (diamonds == null) { }
        else {
            while (diamonds.firstChild) {
                diamonds.removeChild(diamonds.firstChild);
            }
        }

        var hearts = document.getElementById("Hearts");
        if (hearts == null) return false;
        while (hearts.firstChild) {
            hearts.removeChild(hearts.firstChild);
        }
        var spades = document.getElementById("Spades");
        if (spades == null) return false;
        while (spades.firstChild) {
            spades.removeChild(spades.firstChild);
        }

        let cardsinfull = new SuitCardColor();
        let listofcards = cardsinfull.listallcardsWebAPI();


        for (let entry of listofcards) {
            let todisplay = "<img width=15% height=70% src='images/" + entry.CardImage + "' alt= " + entry.CardID + "  / >";

            let suitplace = document.getElementById(entry.SuitID);
            if (suitplace == null) continue;

            document.getElementById(entry.SuitID).innerHTML += todisplay;
        }

        document.getElementById("cardstile").innerHTML = 'Cards'

        alert("Cards Loaded");

        return false;
    }

    //var allplayerslink = document.getElementById("allplayerslink");

    //allplayerslink.onclick = function () {

    //    var players = document.getElementById("Players");
    //    while (players.firstChild) {
    //        players.removeChild(players.firstChild);
    //    }

    //    let player = new Player();
    //    let listofplayers = player.listallplayers();

    //    for (let entry of listofplayers) {

    //        let todisplay = '<a id="' + entry.PlayerName + '"  href="" > ' + entry.PlayerFullName + '</a>';
    //        document.getElementById("Players").innerHTML += todisplay;

    //    }

    //    return false;
    //}

    var gameplayerslink = document.getElementById("gameplayerslink");

    gameplayerslink.onclick = function () {

        var players = document.getElementById("Players");
        while (players.firstChild) {
            players.removeChild(players.firstChild);
        }

        let gameid = parseInt(currentgame.getAttribute("value"));

        let player = new PlayerGame();
        let listofplayers = player.getplayersgame(gameid);

        for (let entry of listofplayers) {

            let todisplay = '<a id="' + entry.Name + '"  href="" > ' + entry.Name + '</a>';
            document.getElementById("Players").innerHTML += todisplay;

        }
        alert(" Players have been loaded! ");
        return false;
    }

    var allocatePlayersToGame = document.getElementById("allocatePlayersToGame");

    if (allocatePlayersToGame != null) {
        allocatePlayersToGame.onclick = function () {

            let playergame = new PlayerGame();

            playergame.ID = 0;
            playergame.FKPlayerID = 0;
            playergame.FKGameID = parseInt(currentgame.getAttribute("value"));
            playergame.DateJoinedGame = new Date();
            playergame.PlayerSequence = 0;
            playergame.PlayersTurn = "YES";
            playergame.PlayerList = new Array<Player>();
            for (let x = 0; x <= 3; x++)
            {
                playergame.PlayerList[x] = new Player();
                playergame.PlayerList[x].ID = x+1;
                playergame.PlayerList[x].PlayerName = "X";
                playergame.PlayerList[x].PlayerFullName = "X";
            }
 

            let pg = new PlayerGame()
            pg.allocatePlayersToGame(playergame.FKGameID);

            alert(" Players have been allocated! ");

            return false;
        }
    }

    var distributeCardsToPlayerslink = document.getElementById("distributeCardsToPlayerslink");

    distributeCardsToPlayerslink.onclick = function () {

        var players = document.getElementById("playercards");

        if (players != null) {
            while (players.firstChild) {
                players.removeChild(players.firstChild);
            }

            let gameid = parseInt(currentgame.getAttribute("value"));
                
            let playergame = new PlayerGame();
            let listofplayersresults = playergame.allocatePlayersToGame(gameid);

            //alert(" Cards have been distributed to players. ");

            var playercards = document.getElementById("playercards");
            if (playercards == null) { }
            else {
                while (playercards.firstChild) {
                    playercards.removeChild(playercards.firstChild);
                }
            }

            let cardsinfull = new PlayerGame();
            let listofcards = cardsinfull.getplayerscards(gameid);

            let player = new PlayerGame();
            let listofplayers = player.getplayersgame(gameid);

            // Create manually the div specific class
            let playercardslocation = document.getElementById("playercards");

            for (let playergameitem of listofplayers) {
                playercardslocation.innerHTML += "<div id=PlayerCards" + playergameitem.ID + " class='container'></div><p />";
            }

            for (let entry of listofcards) {

                let playercardtag = "PlayerCards" + entry.CardIsWithPlayerID.toString();
                let suitplace = document.getElementById(playercardtag);
                if (suitplace == null) continue;

                let todisplay = "<img width=7% height=50% src='images/" + entry.CardImageLocation + "' alt= " + entry.FKSuitCardColorID + "  / >";
                suitplace.innerHTML += todisplay;
            }

            document.getElementById("cardstile").innerHTML = 'Cards'

            //alert("Cards Loaded");



        }
        return false;
    }

    var playerscardslink = document.getElementById("playerscardslink");
    if (playerscardslink == null) return false;

    playerscardslink.onclick = function () {

        var playercards = document.getElementById("playercards");
        if (playercards == null) { }
        else {
            while (playercards.firstChild) {
                playercards.removeChild(playercards.firstChild);
            }
        }

        let gameid = parseInt(currentgame.getAttribute("value"));
        let cardsinfull = new PlayerGame();
        let listofcards = cardsinfull.getplayerscards(gameid);

        let player = new PlayerGame();
        let listofplayers = player.getplayersgame(gameid);

        // Create manually the div specific class
        let playercardslocation = document.getElementById("playercards");

        for (let playergameitem of listofplayers) {
            playercardslocation.innerHTML += "<div id=PlayerCards" + playergameitem.ID + " class='container'></div><p />";
        }

        for (let entry of listofcards) {

            let playercardtag = "PlayerCards" + entry.CardIsWithPlayerID.toString();
            let suitplace = document.getElementById(playercardtag);
            if (suitplace == null) continue;

            let todisplay = "<img width=7% height=50% src='images/" + entry.CardImageLocation + "' alt= " + entry.FKSuitCardColorID + "  / >";
            suitplace.innerHTML += todisplay;
        }

        document.getElementById("cardstile").innerHTML = 'Cards'

        alert("Cards Loaded");

        return false;
    }
}





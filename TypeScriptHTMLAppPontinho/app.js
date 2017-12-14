window.onload = function () {
    var newgamelink = document.getElementById("newgamelink");
    if (newgamelink == null)
        return false;
    if (newgamelink != null) {
        newgamelink.onclick = function () {
            var game = new Game();
            game.ID = 0;
            game.GameType = "PONTINHO";
            var gameid = Game.add(game);
            alert("Game has been created! " + gameid.ID);
            return false;
        };
    }
    var currentgame = document.getElementById("gamenumber");
    if (currentgame != null) {
        var gamecurrent = Game.getcurrentgame();
        currentgame.setAttribute('value', gamecurrent.ID.toString());
    }
    var allcardsuitlink = document.getElementById("allcardsuitlink");
    if (allcardsuitlink == null)
        return false;
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
        if (hearts == null)
            return false;
        while (hearts.firstChild) {
            hearts.removeChild(hearts.firstChild);
        }
        var spades = document.getElementById("Spades");
        if (spades == null)
            return false;
        while (spades.firstChild) {
            spades.removeChild(spades.firstChild);
        }
        var cardsinfull = new SuitCardColor();
        var listofcards = cardsinfull.listallcardsWebAPI();
        for (var _i = 0, listofcards_1 = listofcards; _i < listofcards_1.length; _i++) {
            var entry = listofcards_1[_i];
            var todisplay = "<img width=15% height=70% src='images/" + entry.CardImage + "' alt= " + entry.CardID + "  / >";
            var suitplace = document.getElementById(entry.SuitID);
            if (suitplace == null)
                continue;
            document.getElementById(entry.SuitID).innerHTML += todisplay;
        }
        document.getElementById("cardstile").innerHTML = 'Cards';
        alert("Cards Loaded");
        return false;
    };
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
        var gameid = parseInt(currentgame.getAttribute("value"));
        var player = new PlayerGame();
        var listofplayers = player.getplayersgame(gameid);
        for (var _i = 0, listofplayers_1 = listofplayers; _i < listofplayers_1.length; _i++) {
            var entry = listofplayers_1[_i];
            var todisplay = '<a id="' + entry.Name + '"  href="" > ' + entry.Name + '</a>';
            document.getElementById("Players").innerHTML += todisplay;
        }
        alert(" Players have been loaded! ");
        return false;
    };
    var allocatePlayersToGame = document.getElementById("allocatePlayersToGame");
    if (allocatePlayersToGame != null) {
        allocatePlayersToGame.onclick = function () {
            var playergame = new PlayerGame();
            playergame.ID = 0;
            playergame.FKPlayerID = 0;
            playergame.FKGameID = parseInt(currentgame.getAttribute("value"));
            playergame.DateJoinedGame = new Date();
            playergame.PlayerSequence = 0;
            playergame.PlayersTurn = "YES";
            playergame.PlayerList = new Array();
            for (var x = 0; x <= 3; x++) {
                playergame.PlayerList[x] = new Player();
                playergame.PlayerList[x].ID = x + 1;
                playergame.PlayerList[x].PlayerName = "X";
                playergame.PlayerList[x].PlayerFullName = "X";
            }
            var pg = new PlayerGame();
            pg.allocatePlayersToGame(playergame.FKGameID);
            alert(" Players have been allocated! ");
            return false;
        };
    }
    var distributeCardsToPlayerslink = document.getElementById("distributeCardsToPlayerslink");
    distributeCardsToPlayerslink.onclick = function () {
        var players = document.getElementById("playercards");
        if (players != null) {
            while (players.firstChild) {
                players.removeChild(players.firstChild);
            }
            var gameid = parseInt(currentgame.getAttribute("value"));
            var playergame = new PlayerGame();
            var listofplayersresults = playergame.allocatePlayersToGame(gameid);
            //alert(" Cards have been distributed to players. ");
            var playercards = document.getElementById("playercards");
            if (playercards == null) { }
            else {
                while (playercards.firstChild) {
                    playercards.removeChild(playercards.firstChild);
                }
            }
            var cardsinfull = new PlayerGame();
            var listofcards_2 = cardsinfull.getplayerscards(gameid);
            var player = new PlayerGame();
            var listofplayers = player.getplayersgame(gameid);
            // Create manually the div specific class
            var playercardslocation = document.getElementById("playercards");
            for (var _i = 0, listofplayers_2 = listofplayers; _i < listofplayers_2.length; _i++) {
                var playergameitem = listofplayers_2[_i];
                playercardslocation.innerHTML += "<div id=PlayerCards" + playergameitem.ID + " class='container'></div><p />";
            }
            for (var _a = 0, listofcards_3 = listofcards_2; _a < listofcards_3.length; _a++) {
                var entry = listofcards_3[_a];
                var playercardtag = "PlayerCards" + entry.CardIsWithPlayerID.toString();
                var suitplace = document.getElementById(playercardtag);
                if (suitplace == null)
                    continue;
                var todisplay = "<img width=7% height=50% src='images/" + entry.CardImageLocation + "' alt= " + entry.FKSuitCardColorID + "  / >";
                suitplace.innerHTML += todisplay;
            }
            document.getElementById("cardstile").innerHTML = 'Cards';
        }
        return false;
    };
    var playerscardslink = document.getElementById("playerscardslink");
    if (playerscardslink == null)
        return false;
    playerscardslink.onclick = function () {
        var playercards = document.getElementById("playercards");
        if (playercards == null) { }
        else {
            while (playercards.firstChild) {
                playercards.removeChild(playercards.firstChild);
            }
        }
        var gameid = parseInt(currentgame.getAttribute("value"));
        var cardsinfull = new PlayerGame();
        var listofcards = cardsinfull.getplayerscards(gameid);
        var player = new PlayerGame();
        var listofplayers = player.getplayersgame(gameid);
        // Create manually the div specific class
        var playercardslocation = document.getElementById("playercards");
        for (var _i = 0, listofplayers_3 = listofplayers; _i < listofplayers_3.length; _i++) {
            var playergameitem = listofplayers_3[_i];
            playercardslocation.innerHTML += "<div id=PlayerCards" + playergameitem.ID + " class='container'></div><p />";
        }
        for (var _a = 0, listofcards_4 = listofcards; _a < listofcards_4.length; _a++) {
            var entry = listofcards_4[_a];
            var playercardtag = "PlayerCards" + entry.CardIsWithPlayerID.toString();
            var suitplace = document.getElementById(playercardtag);
            if (suitplace == null)
                continue;
            var todisplay = "<img width=7% height=50% src='images/" + entry.CardImageLocation + "' alt= " + entry.FKSuitCardColorID + "  / >";
            suitplace.innerHTML += todisplay;
        }
        document.getElementById("cardstile").innerHTML = 'Cards';
        alert("Cards Loaded");
        return false;
    };
};
//# sourceMappingURL=app.js.map
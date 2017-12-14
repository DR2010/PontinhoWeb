var Player = (function () {
    function Player() {
    }
    Player.prototype.listallplayers = function () {
        var list2 = [];
        var listallplayers = HelperPontinho.Get("http://danielmsi.dm:45000/api/player");
        list2 = JSON.parse(listallplayers);
        return list2;
    };
    return Player;
}());
//# sourceMappingURL=Player.js.map
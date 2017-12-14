var PlayerCard = (function () {
    function PlayerCard() {
    }
    PlayerCard.prototype.listallplayers = function () {
        var list2 = [];
        var listallplayers = HelperPontinho.Get("http://danielmsi.dm:45000/api/player");
        list2 = JSON.parse(listallplayers);
        return list2;
    };
    return PlayerCard;
}());
//# sourceMappingURL=PlayerCard.js.map
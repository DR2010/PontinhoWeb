var Card = (function () {
    function Card() {
    }
    Card.prototype.listallcards = function () {
        var list2 = [];
        var listofcards = HelperPontinho.Get("http://danielmsi.dm:45000/api/card");
        list2 = JSON.parse(listofcards);
        return list2;
    };
    return Card;
}());
//# sourceMappingURL=Card.js.map
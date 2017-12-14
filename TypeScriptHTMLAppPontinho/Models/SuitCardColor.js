var SuitCardColor = (function () {
    function SuitCardColor() {
    }
    SuitCardColor.prototype.listallcardsWebAPI = function () {
        var list2 = [];
        var listofcards = HelperPontinho.Get("http://danielmsi.dm:45000/api/suitcardcolor");
        list2 = JSON.parse(listofcards);
        return list2;
    };
    return SuitCardColor;
}());
//# sourceMappingURL=SuitCardColor.js.map
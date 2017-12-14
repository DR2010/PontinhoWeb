class SuitCardColor {
    ID: number;
    SuitID: string;
    CardID: string;
    Color: string;
    Sequence: string;
    CardImage: string;
    ImageName: string;


    public listallcardsWebAPI() {

        let list2: Array<SuitCardColor> = [];

        let listofcards = HelperPontinho.Get("http://danielmsi.dm:45000/api/suitcardcolor");

        list2 = JSON.parse(listofcards);
        return list2;
    }


}
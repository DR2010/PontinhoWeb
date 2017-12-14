class Card {

    ID: number;
    CardID: string;
    CardDescription: string;
    CardImageName: string;

    public listallcards() {

        let list2: Array<Card> = [];

        let listofcards = HelperPontinho.Get("http://danielmsi.dm:45000/api/card");

        list2 = JSON.parse(listofcards);
        return list2;
    }
}

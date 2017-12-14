class Player {

    ID: number;
    PlayerName: string;
    PlayerFullName: string;

    public listallplayers() {

         let list2: Array<Player> = [];

        let listallplayers = HelperPontinho.Get("http://danielmsi.dm:45000/api/player");

        list2 = JSON.parse(listallplayers);
        return list2;
    }


}

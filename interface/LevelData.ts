interface LevelData {
    walls: WallData[];
    players: {
        player1: PlayerData;
        player2: PlayerData;
    };
    goldPlates: PressurePlateData[];
    pressurePlate:PressurePlateData[];
    door:DoorData[];
}
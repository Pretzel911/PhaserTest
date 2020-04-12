var config = {
    type: Phaser.AUTO,
    width: 1152,
    height: 648,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 }
        }
    },
    scene: {
        preload: preload,
        create: create
    }
};

class GameState {
    constructor() {
        this.state = null;
        this.menu = null;
        this.map = null;
        this.cities = new Array();
    }
}
class City {
    constructor(){
        this.name = "";
        this.population = 0;
        this.graphic = null;
        this.citiesFarm = new Array();
    }
}

var gameState = new GameState();
var game = new Phaser.Game(config);

function preload() {
    this.load.image('MapMap', 'GameAssets/Images/Map/Map.png');
    this.load.image('MenuMenu', 'GameAssets/Images/Menu/Menu.png');
    this.load.image('BuildingCity', 'GameAssets/Images/Building/City.png');
    this.load.image('BuildingFarm', 'GameAssets/Images/Building/Farm.png');
}

function create() {
    gameState.map = this.add.sprite(576, 324, 'MapMap').setInteractive();
    gameState.state = this;
    CreateMenu();
}
function CreateMenu() {
    gameState.state.physics.add.image(50, 120, 'MenuMenu');
    var menuBuildingCity = gameState.state.physics.add.image(50, 50, 'BuildingCity').setInteractive();
    menuBuildingCity.on('pointerup', function (pointer) {
        gameState.map.on('pointerup', function (pointer) {
            PlaceBuilding(pointer, "BuildingCity");
        });
    });
    //menu.add(menuBuildingCity);

    var menuBuildingFarm = gameState.state.physics.add.image(50, 90, 'BuildingFarm').setInteractive();
    menuBuildingFarm.on('pointerup', function (pointer) {
        gameState.map.on('pointerup', function (pointer) {
            PlaceBuilding(pointer,"BuildingFarm");
        });
    });
    //menu.add(menuBuildingFarm);
}
function PlaceBuilding(pointer,BuildingName) {

    var tempCity = new City();
    tempCity.name = "City1";
    tempCity.population = 500;
    tempCity.graphic = gameState.state.physics.add.image(pointer.upX, pointer.upY, BuildingName);
    gameState.cities.push(tempCity);
    console.log(gameState);   
}

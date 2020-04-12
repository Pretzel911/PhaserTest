﻿var config = {
    type: Phaser.AUTO,
    width: 1920,
    height: 1080,
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

var gameState = new GameState();
var game = new Phaser.Game(config);

function preload() {
    this.load.image('MapMap', 'GameAssets/Images/Map/Map.png');
    this.load.image('MenuMenu', 'GameAssets/Images/Menu/Menu.png');
    this.load.image('BuildingCity', 'GameAssets/Images/Building/City.png');
    this.load.image('BuildingFarm', 'GameAssets/Images/Building/Farm.png');
}

function create() {
    gameState.map = this.add.sprite(960, 540, 'MapMap').setInteractive();
    gameState.state = this;
    CreateMenu();
    CreateTileHighlighter();
    console.log(gameState);
}
function CreateMenu() {
    gameState.state.physics.add.image(50, 120, 'MenuMenu');
    var menuBuildingCity = gameState.state.physics.add.image(50, 50, 'BuildingCity').setInteractive();
    menuBuildingCity.on('pointerup', function (pointer) {
        gameState.map.on('pointerup', function (pointer) {
            PlaceBuilding(pointer, "BuildingCity");
        });
    });

    var menuBuildingFarm = gameState.state.physics.add.image(50, 90, 'BuildingFarm').setInteractive();
    menuBuildingFarm.on('pointerup', function (pointer) {
        gameState.map.on('pointerup', function (pointer) {
            PlaceBuilding(pointer,"BuildingFarm");
        });
    });
}
function CreateTileHighlighter() {
    var graphics = gameState.state.add.graphics({ lineStyle: { width: 2, color: 0xaa0000 }, fillStyle: { color: 0x0000aa } });
    var rect = new Phaser.Geom.Rectangle();
    gameState.state.input.on('pointermove', function (pointer) {
        console.log("StartLooking");
        graphics.clear();
        var selectedTile = gameState.GetSelectedTile(pointer.x, pointer.y);
        console.log("x: " + pointer.upX + "y: " + pointer.upY);
        console.log("x: " +selectedTile.x + "y: "+selectedTile.y);
        rect.x = selectedTile.xStart;
        rect.y = selectedTile.yStart;
        rect.width = selectedTile.width;
        rect.height = selectedTile.height;
        var area = Phaser.Geom.Rectangle.Area(rect);
        graphics.strokeRectShape(rect);
        console.log("FinishLooking");
    });
    
}
function PlaceBuilding(pointer,BuildingName) {
    console.log(gameState.GetSelectedTile(pointer.upX, pointer.upY));
    var selectedTile = gameState.GetSelectedTile(pointer.upX, pointer.upY);
    if (selectedTile.tileType !== "Water") {
        selectedTile.building = BuildingName;
        var tempCity = new City();
        tempCity.name = "City1";
        tempCity.population = 500;
        tempCity.graphic = gameState.state.physics.add.image(selectedTile.xMid(), selectedTile.yMid(), BuildingName);
        gameState.cities.push(tempCity);
        console.log(gameState);
    }
}

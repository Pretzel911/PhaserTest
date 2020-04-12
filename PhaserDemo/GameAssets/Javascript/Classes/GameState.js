class GameState {
    constructor() {
        this.state = null;
        this.menu = null;
        this.map = null;
        this.buildings = new Array();

        //Tiles Stuff
        this.tiles = null;
        this.tilesXCount = 32;
        this.tilesYCount = 36;
        this.tilesWidth = 60;
        this.tilesHeight = 30;
        this.GenerateTiles();
    }
    GenerateTiles() {
        console.log(this.tilesXCount);
        this.tiles = new Array();
        for (var x = 0; x < this.tilesXCount; x++) {
            this.tiles[x] = new Array();
            for (var y = 0; y < this.tilesYCount; y++) {
                this.tiles[x][y] = new Tile();
                this.tiles[x][y].xIndex = x;
                this.tiles[x][y].yIndex = y;
                this.tiles[x][y].xStart = x * this.tilesWidth;
                this.tiles[x][y].yStart = y * this.tilesHeight;
                this.tiles[x][y].xEnd = (x * this.tilesWidth) + this.tilesWidth;
                this.tiles[x][y].yEnd = (y * this.tilesHeight) + this.tilesHeight;
                this.tiles[x][y].width = this.tilesWidth;
                this.tiles[x][y].height = this.tilesHeight;
                if (x === 0 || y === 0 || x === this.tilesXCount - 1 || y === -this.tilesYCount - 1) {
                    this.tiles[x][y].tileType = "Water";
                }
                else {
                    this.tiles[x][y].tileType = "Land";
                }
            }
        }
    }
    GetSelectedTile(xPixel, yPixel) {
        for (var x = 0; x < this.tilesXCount; x++) {
            for (var y = 0; y < this.tilesYCount; y++) {
                if ((xPixel >= this.tiles[x][y].xStart && xPixel < this.tiles[x][y].xEnd) &&
                    (yPixel >= this.tiles[x][y].yStart && yPixel < this.tiles[x][y].yEnd)) {
                    return this.tiles[x][y];
                }
            }
        }
    }
    //Tick Events
    PerformTick() {
        for (var i = 0; i < this.buildings.length; i++) {
            if (this.buildings[i].buildingType === "BuildingCity") {
                this.buildings[i].PerformCityTick();
                console.log(this.buildings[i]);
            }
        }
    }
}
class Tile {
    constructor() {
        this.xIndex = null;
        this.yIndex = null;
        this.xStart = null;
        this.yStart = null;
        this.xEnd = null;
        this.yEnd = null;
        this.width = null;
        this.height = null;
        this.tileType = null;//"Water" or "Land"
        this.building = null;
    }
    xMid() {
        return this.xStart + (this.width / 2);
    }
    yMid() {
        return this.yStart + (this.height / 2);
    }
}
class Menu { //Menu object
    constructor() {
        this.graphic = null;
        this.open = false;
        this.menuItemList = [];
    }
    destroyMenu() {
        if (this.menuItemList !== null) {
            for (var i = 0; i < this.menuItemList.length; i++) {
                if (this.menuItemList[i].type === 1) {
                    this.menuItemList[i].graphic.disableBody(true, true);
                }
                else { //if (this.menuItemList[i].type === 2)
                    this.menuItemList[i].graphic.destroy();
                }
            }
        }
        //this.graphic.disableBody(true, true);
        this.graphic.destroy();
    }

    addMenuItemImage(x,y,type, state) {//Todo Test
        var tempMenuItem = new menuItem();
        tempMenuItem.graphic = state.physics.add.image(x, y, type).setInteractive();
        tempMenuItem.type = 1;
        this.menuItemList.push(tempMenuItem);
        
    }
    addMenuItemText(x, y, text, state) {
        var tempMenuItem = new MenuItem();
        tempMenuItem.graphic = state.add.text(x, y, text, { fontSize: '16px', fill: '#000' });
        tempMenuItem.type = 2;
        this.menuItemList.push(tempMenuItem);
    }
}
class MenuItem { //Menu object
    constructor() {
        this.graphic = null;
        this.type = null; //1 image, 2 text
    }
}
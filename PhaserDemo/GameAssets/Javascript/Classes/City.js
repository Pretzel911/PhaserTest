class City {
    constructor() {
        this.name = "";
        this.population = 0;
        this.graphic = null;
        this.citiesFarm = new Array();
        this.foodReserve = 0;
        this.GrowthRate = ""; //Set cities growth rate, changes population growth formula (meager, standard, abundant) Use more food to increase population growth rate
    }
    //Run this to make city population to grow
    populationGroth() {
        switch (this.GrowthRate) {
            case "meager":
                if (this.foodReserve > .5 * (this.population)) {
                    this.population = this.population * (0.2);
                    this.foodReserve -= .5 * (this.population);
                }
                else {
                    this.population = this.population - (.1 * (this.foodReserve - (.5 * this.population)));
                    this.foodReserve = 0;
                }
                break;
            case "abundant":
                if (this.foodReserve > (2.5 * this.population)) {
                    this.population = this.population * (0.10);
                    this.foodReserve -= 2.5 * (this.population);
                }
                else {
                    this.population = this.population - (.1 * (this.foodReserve - (2.5 * this.population)));
                    this.foodReserve = 0;
                }
                break;
            case "standard":
                if (this.foodReserve > (this.population)) {
                    this.population = this.population * (0.05);
                    this.foodReserve -= this.population;
                }
                else {
                    this.population = this.population - (.1 * (this.foodReserve - (this.population)));
                    this.foodReserve = 0;
                }
        }
    }
    setGrowthRate(selectedGrowthRate) {
        if (selectedGrowthRate === 2) {
            this.GrowthRate = "meager";
        }
        else if (selectedGrowthRate === 3) {
            this.GrowthRate = "abundant";
        }
        else {
            this.GrowthRate = "standard";
        }
    }
}
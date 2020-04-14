class City extends Building {
    constructor() {
        super();
        this.population = 0;
        this.foodReserve = 0;
        this.GrowthRate = "standard"; //Set cities growth rate, changes population growth formula (meager, standard, abundant) Use more food to increase population growth rate
        this.resourceBuildings = [];
    }
    PerformTick() {
        this.CollectResources();
        this.PerformPopulationGrowth();
    }
    CollectResources() {
        for (var i = 0; i < this.resourceBuildings.length; i++) {
            this.foodReserve += this.resourceBuildings[i].foodReserve;
            this.resourceBuildings[i].foodReserve = 0;
        }
    }
    //Run this to make city population to grow
    PerformPopulationGrowth() {
        switch (this.GrowthRate) {
            case "meager":
                if (this.foodReserve >= .5 * (this.population)) {
                    this.foodReserve -= .5 * (this.population);
                    this.population += this.population * (0.02);
                }
                else {
                    this.population = this.population - (.05 * ((.5 * this.population) - this.foodReserve));
                    this.foodReserve = 0;
                }
                break;
            case "abundant":
                if (this.foodReserve >= (2.5 * this.population)) {
                    this.foodReserve -= 2.5 * (this.population);
                    this.population += this.population * (0.10);
                }
                else {
                    this.population = this.population - (.05 * ((2.5 * this.population) - this.foodReserve));
                    this.foodReserve = 0;
                }
                break;
            case "standard":
                if (this.foodReserve >= (this.population)) {
                    this.foodReserve -= this.population;
                    this.population += this.population * (0.05);
                }
                else {
                    this.population = this.population - (.05 * ((this.population) - this.foodReserve));
                    this.foodReserve = 0;
                }
        }
        this.population = Math.floor(this.population);
        this.foodReserve = Math.floor(this.foodReserve);
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
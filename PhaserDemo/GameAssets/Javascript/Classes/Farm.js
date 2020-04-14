class Farm extends Building{
    constructor() {
        super();
        this.workers = 0; //maybe?
        this.foodReserve = 0;
        this.foodProduction = 5000; //amount of food the farm produces
        this.city = null;
    }
    PerformTick() {
        this.ProduceFood();
    }
    ProduceFood() {
        this.foodReserve += this.foodProduction;
    }
}
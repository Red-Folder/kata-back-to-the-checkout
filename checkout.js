class Checkout {
    constructor(pricingRules) {
        this.pricingRules = pricingRules;
        this.runningTotal = 0;
    }

    scan(item) {
        this.runningTotal += this.pricingRules.find(x => x.item === item).unitPrice;
    }

    total() {
        return this.runningTotal;
    }
}

export default Checkout;
import pricerFactory from "./pricerFactory";

class Checkout {
    constructor(pricingRules) {
        this.pricingRules = pricerFactory(pricingRules);
    }

    scan(item) {
        this.pricingRules.find(x => x.item === item).increment();
    }

    total() {
        return this.pricingRules.map(x => x.total()).reduce((acc, x) => acc += x );
    }
}

export default Checkout;
class SimplePricer {
    constructor(item, unitPrice) {
        this.itemCode = item;
        this.unitPrice = unitPrice;
        this.quantity = 0;
    }

    get item() {
        return this.itemCode;
    }

    increment() {
        this.quantity++;
    }

    total() {
        return this.quantity * this.unitPrice;
    }
}

export default SimplePricer;
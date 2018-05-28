class SpecialPricer {
    constructor(item, unitPrice, specialQuantity, specialPrice) {
        this.itemCode = item;
        this.unitPrice = unitPrice;
        this.specialQuantity = specialQuantity;
        this.specialPrice = specialPrice;

        this.quantity = 0;
    }

    get item() {
        return this.itemCode;
    }

    increment() {
        this.quantity++;
    }

    total() {
        let total = 0;

        // Add the number of special
        total += Math.floor(this.quantity/ this.specialQuantity) * this.specialPrice;

        // Add the remainder of units
        let mod = this.quantity % this.specialQuantity;
        total += mod * this.unitPrice;

        return total;
    }
}

export default SpecialPricer;
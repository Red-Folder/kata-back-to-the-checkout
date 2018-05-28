import Checkout from "./checkout";

const pricingRules = [
    { 
        item: "A",
        unitPrice: 50
    },
    {
        item: "B",
        unitPrice: 30
    }
];

describe("Checkout will return", () => {
    it("0 for no products", () => {
        const checkout = new Checkout(pricingRules);
        expect(checkout.total()).toBe(0);
    })
    it("50 for 'A'", () => {
        const checkout = new Checkout(pricingRules);
        checkout.scan("A");
        expect(checkout.total()).toBe(50);
    })
    it("80 for 'AB'", () => {
        const checkout = new Checkout(pricingRules);
        checkout.scan("A");
        checkout.scan("B");
        expect(checkout.total()).toBe(80);
    })
})
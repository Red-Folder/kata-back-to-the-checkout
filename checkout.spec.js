import Checkout from "./checkout";

const pricingRules = [];

describe("Checkout will return", () => {
    it("0 for no products", () => {
        const checkout = new Checkout(pricingRules);
        expect(checkout.total()).toBe(0);
    })
})
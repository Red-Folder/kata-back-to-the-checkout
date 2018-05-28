import Checkout from "./checkout";

const pricingRules = [
    { 
        item: "A",
        unitPrice: 50,
        special: {
            quantity: 3,
            specialPrice: 130
        }
    },
    {
        item: "B",
        unitPrice: 30,
        special: {
            quantity: 2,
            specialPrice: 45
        }
    },
    {
        item: "C",
        unitPrice: 20
    },
    {
        item: "D",
        unitPrice: 15
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
    it("115 for 'CDBA'", () => {
        const checkout = new Checkout(pricingRules);
        checkout.scan("C");
        checkout.scan("D");
        checkout.scan("B");
        checkout.scan("A");
        expect(checkout.total()).toBe(115);
    })
    it("100 for 'AA'", () => {
        const checkout = new Checkout(pricingRules);
        checkout.scan("A");
        checkout.scan("A");
        expect(checkout.total()).toBe(100);
    })

    it("130 for 'AAA'", () => {
        const checkout = new Checkout(pricingRules);
        checkout.scan("A");
        checkout.scan("A");
        checkout.scan("A");
        expect(checkout.total()).toBe(130);
    })

    it("190 for 'DABABA'", () => {
        const checkout = new Checkout(pricingRules);
        checkout.scan("D");
        checkout.scan("A");
        checkout.scan("B");
        checkout.scan("A");
        checkout.scan("B");
        checkout.scan("A");
        expect(checkout.total()).toBe(190);
    })
})
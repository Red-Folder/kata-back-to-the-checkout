import SimplePricer from "./simplePricer";
import SpecialPricer from "./specialPricer";

const pricerFactory = pricingRules => {
    return pricingRules = pricingRules.map(x => {
        if (typeof x.special != 'undefined') {
            return new SpecialPricer(x.item, x.unitPrice, x.special.quantity, x.special.specialPrice);
        }
        
        return new SimplePricer(x.item, x.unitPrice);
    });
}

export default pricerFactory;
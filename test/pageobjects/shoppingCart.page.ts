import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ShoppingCartPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get shoppingCartTitle () { 
        return $('span[data-test="title"]')
    }

    public get backPackTitle () { 
        return $('a[data-test="item-4-title-link"]')
    }
    public get backBackQuantity () { 
        return $('div[data-test="item-quantity"]')
    }
    public get checkoutButton () { 
        return $('button[data-test="checkout"]')
    }
    public get removeBackpackButton () {
        return $('button[data-test="remove-sauce-labs-backpack"]')
    }

}

export default new ShoppingCartPage();

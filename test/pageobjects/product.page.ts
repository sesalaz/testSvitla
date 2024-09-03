import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class ProductPage extends Page {
    /**
     * define selectors using getter methods
     */

    public get title () { 
        return $('span[class="title"]')
    }
    public get inventoryItem() { 
        return $$('div[class="inventory_item"]')
    }
    public get addtoCartBackPack() { 
        return $('#add-to-cart-sauce-labs-backpack')
    }
    public get removeBackPack(){ 
        return $('#remove-sauce-labs-backpack')
    }
    public get shoppingCart() { 
        return $('a[class="shopping_cart_link"]')
    }

    /**
     * a method to encapsule automation code to interact with the page
     * functionality : Add to Shopping cart
     */
    public async addToCart () {
        await this.addtoCartBackPack.click();
        await expect(this.removeBackPack).toBeDisplayed()
       

    }

}

export default new ProductPage();

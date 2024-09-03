import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutCompletePage extends Page {
    /**
     * define selectors using getter methods
     */
    public get checkoutComplete() { 
        return $('h2[data-test="complete-header"]')
    }

    public get backButton () { 
        return $('button[data-test="back-to-products"]')
    }
    

}

export default new CheckoutCompletePage();

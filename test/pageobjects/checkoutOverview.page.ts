import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutOverviewPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get checkoutOverviewTitle () { 
        return $('span[data-test="title"]')
    }

    public get finishButton () { 
        return $('button[data-test="finish"]')
    }
    

}

export default new CheckoutOverviewPage();

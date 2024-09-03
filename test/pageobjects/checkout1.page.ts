import { $ } from '@wdio/globals'
import Page from './page.js';

/**
 * sub page containing specific selectors and methods for a specific page
 */
class CheckoutPage extends Page {
    /**
     * define selectors using getter methods
     */
    public get firstName () { 
        return $('input[data-test="firstName"]')
    }

    public get lastName () { 
        return $('input[data-test="lastName"]')
    }
    public get zipCode () { 
        return $('input[data-test="postalCode"]')
    }
    public get continueBtn () { 
        return $('input[data-test="continue"]')
    }
//Fill checkout 1 
    public async fillCheckotuForm1 (first: string, last: string, zip: string) {
        await this.firstName.setValue(first);
        await this.lastName.setValue(last);
        await this.zipCode.setValue(zip)
        await this.continueBtn.click();
    }
    

}

export default new CheckoutPage();

import { expect } from '@wdio/globals'
import LoginPage from '../pageobjects/login.page.js'
import ProductPage from '../pageobjects/product.page.js'
import ShoppingCartPage from '../pageobjects/shoppingCart.page.js'
import checkout1Page from '../pageobjects/checkout1.page.js'
import checkoutOverviewPage from '../pageobjects/checkoutOverview.page.js'
import checkoutCompletePage from '../pageobjects/checkoutComplete.page.js'

describe('basic application flow', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await expect(ProductPage.title).toBeExisting()
        await expect(ProductPage.title).toHaveText(
              expect.stringContaining('Products'))

    })
    it('should verify items are existing in product page', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        let inventoryItems = await ProductPage.inventoryItem
        for await(const elem of inventoryItems){
           await expect(elem).toBeExisting()
           await expect(elem).toBeDisplayed()
        }

    })
    it('should verify items can be added succesfully to shopping cart', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await ProductPage.addToCart()
        await ProductPage.shoppingCart.click()
        await expect(ShoppingCartPage.shoppingCartTitle).toHaveText('Your Cart')
        await expect(ShoppingCartPage.backBackQuantity).toHaveText("1")
        await expect(ShoppingCartPage.backPackTitle).toHaveText('Sauce Labs Backpack')
        // Removes the backpack from the cart to cleanup 
        await ShoppingCartPage.removeBackpackButton.click()


    })
    it('should verify that user can complete checkout process succesfully', async () => {
        await LoginPage.open()

        await LoginPage.login('standard_user', 'secret_sauce')
        await ProductPage.addToCart()
        await ProductPage.shoppingCart.click()
        await ShoppingCartPage.checkoutButton.click()
        await checkout1Page.fillCheckotuForm1('Sebastian', 'Salazar', '33122')
        await expect(checkoutOverviewPage.checkoutOverviewTitle).toHaveText('Checkout: Overview')
        await checkoutOverviewPage.finishButton.click()
        //Verifies checkout finish page is displayed
        await expect(checkoutCompletePage.checkoutComplete).toHaveText('Thank you for your order!')
        //Verifies user can return to product page
        await checkoutCompletePage.backButton.click()
        await expect(ProductPage.title).toBeDisplayed

    })
})


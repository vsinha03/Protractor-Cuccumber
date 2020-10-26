import {element, by, ElementFinder, browser, protractor} from "protractor";

const EC = protractor.ExpectedConditions;

export class AlertsPage {
    alert: ElementFinder = element(by.css('#alertButton.btn.btn-primary'));

    async clickAlert() {
        await browser.wait
        await this.alert.click();
    }

    async confirmAlert() {
        await browser.switchTo().alert().accept();
    }


}
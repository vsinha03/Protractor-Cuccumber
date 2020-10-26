import {browser, by, element} from "protractor";
import {expect} from 'chai';

export class NewTab {

    async clickNewTab() {
        const newTab = element(by.css('button[id=\'tabButton\']'));
        await newTab.click();

    }

    async verifyNewTab() {
        const newHeading = element(by.css('h1[id=\'sampleHeading\']'));
        browser.getAllWindowHandles().then((handles) => {
            browser.switchTo().window(handles[1]).then(() => {
                expect(newHeading.isDisplayed(), 'Not switched to new tab').to.equal(true);
                browser.quit();
            })
        });
    }


}
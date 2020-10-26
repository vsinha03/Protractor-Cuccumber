import {browser, by, element, ElementFinder, protractor} from "protractor";
import { expect } from 'chai';

const EC = protractor.ExpectedConditions;

export class ProgressBarPage {

    start: ElementFinder = element(by.css('button[id=\'startStopButton\']'));
    reset: ElementFinder = element(by.css('button[id=\'resetButton\']'));
    progressBar: ElementFinder = element((by.css('div.progress-bar.bg-info')));
    progressSuccess: ElementFinder = element((by.css('div.progress-bar.bg-success')));

    async startProgress() {
        browser.wait(EC.elementToBeClickable(this.start), 10000).then (async () => {
            await this.start.click();
        });
    }

    async verifyProgressSuccess() {
        browser.wait(EC.visibilityOf(this.reset), 30000).then(async () => {
            await expect(this.reset.isDisplayed(), 'Progress bar completed successfully').to.eventually.be.true;
        });
    }
}
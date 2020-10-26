import {element, by, ElementFinder, browser, protractor} from "protractor";
import * as path from "path";
import { expect } from 'chai';


const EC = protractor.ExpectedConditions;

export class FileTransferPage {
    selectFile: ElementFinder = element(by.css('input[type=\'file\']'));
    uploadedFile: ElementFinder = element(by.id('uploadedFilePath'));
    download: ElementFinder = element(by.css('a#downloadButton.btn.btn-primary'));

    async uploadFile() {
        let fileToUpload = '../testData/SampleFile.txt';
        let absolutePath = path.resolve(__dirname, fileToUpload);
        await this.selectFile.sendKeys(absolutePath);
    }

    async verifyUpload() {
        await expect(this.uploadedFile.isDisplayed(), 'File not uploaded successfully').to.equal(true);
    }

    async downloadFile() {
        await this.download.click();
    }
}
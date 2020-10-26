import {Given} from 'cucumber'
import {FileTransferPage} from "../../pageObjects/file-transfer.page";
import {When} from 'cucumber'
import {Then} from 'cucumber'
import {browser} from "protractor";

const fileObj: FileTransferPage = new FileTransferPage();

Given(/^User navigates to file transfer page$/,  () => {
    return browser.get('https://demoqa.com' +'/upload-download');
});
When(/^User uploads files$/, async () => {
    await fileObj.uploadFile();
});
Then(/^User can see file is uploaded successfully$/, async () => {
    await fileObj.verifyUpload();
});
Then(/^User downloads the file$/, async () => {
    await fileObj.downloadFile();
});

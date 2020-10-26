import {Given} from 'cucumber'
import {ProgressBarPage} from "../../pageObjects/progress-bar.page";
import {When} from 'cucumber'
import {Then} from 'cucumber'
import {browser} from "protractor";

const progressObj: ProgressBarPage = new ProgressBarPage();

Given(/^User navigates to progress bar page$/,  () => {
    return  browser.get('https://demoqa.com' +'/progress-bar');
});
When(/^User start the progress$/, async () => {
    await progressObj.startProgress();
});
Then(/^User should see progress bar completed$/, async () => {
    await progressObj.verifyProgressSuccess();
});
import {Given} from 'cucumber'
import {NewTab} from "../../pageObjects/new-tab";
import {When} from 'cucumber'
import {Then} from 'cucumber'
import {browser} from "protractor";

const newTabObj: NewTab = new NewTab();

Given(/^User navigates to parent tab$/,  () => {
    return browser.get('https://demoqa.com' +'/browser-windows');
});
When(/^User clicks on new tab button$/, async () => {
    await newTabObj.clickNewTab();
});
Then(/^User should see new tab$/, async () => {
    await newTabObj.verifyNewTab();
});
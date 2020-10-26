import {Given} from 'cucumber'
import {AlertsPage} from "../../pageObjects/alerts.page";
import {When} from 'cucumber'
import {Then} from 'cucumber'
import {browser} from "protractor";

const alertObj: AlertsPage = new AlertsPage();

Given(/^User navigates to alert page$/,   () => {
    return  browser.get('https://demoqa.com' +'/alerts');
});
When(/^User click to show alert$/,  () => {
    alertObj.clickAlert();
});
Then(/^User accepts alert$/,  () => {
    alertObj.confirmAlert();
});
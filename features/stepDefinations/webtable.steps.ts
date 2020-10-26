import {Given, When, Then} from 'cucumber'
import {Webtable} from "../../pageObjects/webtable.page";
import {browser} from "protractor";

const webtableObj: Webtable = new Webtable();

Given(/^User navigates to Web table page$/,   () => {
    return browser.get('https://demoqa.com' +'/webtables');
});

Given(/^Web table should be visible to user$/, async () => {
    await webtableObj.viewWebtable();
});
Then(/^Web table headings is visible to user$/, async () => {
    await webtableObj.viewWebtableHeading();
});
Given(/^User clicks on add button$/, async () => {
    await webtableObj.clickAdd();
});
When(/^User provide required data and submit$/, async () => {
    await webtableObj.addData();
});
Then(/^User should see added data in web table$/, async () => {
    await webtableObj.verifyAddedData('John');
});
Given(/^User clicks on edit button of a web table entry$/, async () => {
    await webtableObj.editData('Legal');
});
When(/^User provide updated data and submit$/, async () => {
    await webtableObj.updateData('Sample');
});
Then(/^User should see updated data in web table$/, async () => {
    await webtableObj.verifyUpdatedData('Sample');
});
Given(/^User click on delete button of a web table entry$/, async () => {
    await webtableObj.deleteData('Legal');
});
Then(/^User should not see deleted data in web table$/, async () => {
    await webtableObj.verifyDeletedData('Legal');
});
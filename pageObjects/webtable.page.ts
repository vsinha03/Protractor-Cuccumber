import { element, by, ElementFinder, browser, ElementArrayFinder } from "protractor";
import { expect } from 'chai';

export class Webtable {
    webtable: ElementFinder = element(by.css('div.web-tables-wrapper'));
    webtableHeading:  ElementFinder = element(by.css('div.rt-resizable-header-content'));
    add: ElementFinder = element(by.id('addNewRecordButton'));
    registrationForm: ElementFinder = element(by.css('div#registration-form-modal'));
    search: ElementFinder = element(by.id('searchBox'));
    webtableRow: ElementFinder = element(by.css('div.rt-tr-group'));
    firstName: ElementFinder = element(by.id('firstName'));
    lastName: ElementFinder = element(by.id('lastName'));
    email: ElementFinder = element(by.id('userEmail'));
    age: ElementFinder = element(by.id('age'));
    salary: ElementFinder = element(by.id('salary'));
    department: ElementFinder = element(by.id('department'));
    submit: ElementFinder = element(by.id('submit'));
    columnValue: ElementArrayFinder = element.all(by.css('div.rt-td'));

    async viewWebtable() {
        await expect(this.webtable.isDisplayed(), 'Webtable is not displayed').to.eventually.be.true;
    }

    async viewWebtableHeading() {
        await expect(this.webtableHeading.isDisplayed(), 'Webtable is not displayed').to.eventually.be.true;
    }

    async clickAdd() {
        await this.add.click();
        await expect (this.registrationForm.isDisplayed(), 'Registration form is not displayed').to.eventually.be.true;
    }

    async addData() {
        await this.firstName.sendKeys('John');
        await this.lastName.sendKeys('Doe');
        await this.email.sendKeys('john.doe@sample.com');
        await this.age.sendKeys('30');
        await this.salary.sendKeys('15000');
        await this.department.sendKeys('Test');
        await this.submit.click();
    }

    async verifyAddedData(name) {
        this.columnValue.getText().then((text) => {
            expect(text, 'Data not added to web table').to.eventually.contain(name);
        });
    }

    async editData(department) {
        let parent = element(by.cssContainingText('.rt-td', department));
        let action = parent.element(by.xpath('following-sibling::div'));
        let editRow = action.element(by.css('div.action-buttons > span[title=\'Edit\']'));
        await editRow.click();
        await expect (this.registrationForm.isDisplayed(), 'Registration form is not displayed').to.eventually.be.true;

    }

    async updateData(updatedData) {
        await this.department.clear();
        await this.department.sendKeys(updatedData);
    }
    async verifyUpdatedData(updatedData) {
        this.columnValue.getText().then((text) => {
            expect(text, 'Data not updated to web table').to.eventually.contain(updatedData);
        });
    }

    async deleteData(department) {
        let parent = element(by.cssContainingText('.rt-td', department));
        let action = parent.element(by.xpath('following-sibling::div'));
        let deleteRow = action.element(by.css('div.action-buttons > span[title=\'Delete\']'));
        await deleteRow.click();
    }
    async verifyDeletedData(deletedData) {
        this.columnValue.getText().then((text) => {
            expect(text, 'Data not deleted from web table').to.eventually.contain(deletedData);
        });
    }
}
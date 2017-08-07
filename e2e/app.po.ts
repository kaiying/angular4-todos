import { browser, by, element } from 'protractor';

export class SenaoNgPage {
    navigateTo() {
        return browser.get('/');
    }

    getTodos() {
        return element(by.css('h1')).getText();
    }

    getPlaceholder() {
        return element(by.css('.new-todo')).getAttribute('placeholder');
    }
}

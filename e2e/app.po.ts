import { browser, by, element } from 'protractor';

export class SenaoNgPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root h1')).getText();
  }

    getTodos() {
    return element(by.css('h1')).getText();
    }
}

import { browser, by, element } from 'protractor';

export class SenaoNgPage {
    navigateTo() {
        browser.get('/');
        return this;
    }

    getTodos() {
        return element(by.css('h1')).getText();
    }

    getPlaceholder() {
        return element(by.css('.new-todo')).getAttribute('placeholder');
    }

    setTodo(input: string): SenaoNgPage {
        element(by.css('.new-todo')).sendKeys(input);

        return this;
    }

    getTodo(): any {
        return element(by.css('.new-todo')).getAttribute('value');
    }
}

import { SenaoNgPage } from './app.po';
import { protractor } from 'protractor';

describe('Angular Todos', () => {
  let page: SenaoNgPage;

  beforeEach(() => {
    page = new SenaoNgPage();
  });

  it(`在<h1>中必須顯示'todos'`, () => {
    page.navigateTo();
    expect(page.getTodos()).toBe('todos');
  });

  it(`在.new-todo的input裡面，placeholder必須是'What needs to be done?'`, () => {
    page.navigateTo();
    expect(page.getPlaceholder()).toBe('What needs to be done?');
  });


  it(`should be empty after pressing enter`, () => {
    page.navigateTo()
        .setTodo('Study Angular')
        .setTodo(protractor.Key.ENTER);

    expect(page.getTodo()).toBe('');
  });

});

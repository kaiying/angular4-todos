import { SenaoNgPage } from './app.po';

describe('senao-ng App', () => {
  let page: SenaoNgPage;

  beforeEach(() => {
    page = new SenaoNgPage();
  });

  it(`在<h1>中必須顯示'todos'`, () => {
    page.navigateTo();
    expect(page.getTodos()).toBe('todos');
  });
});

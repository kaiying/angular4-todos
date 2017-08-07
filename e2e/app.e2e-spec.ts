import { SenaoNgPage } from './app.po';

describe('senao-ng App', () => {
  let page: SenaoNgPage;

  beforeEach(() => {
    page = new SenaoNgPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});

import { PoulpPage } from './app.po';

describe('poulp App', () => {
  let page: PoulpPage;

  beforeEach(() => {
    page = new PoulpPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

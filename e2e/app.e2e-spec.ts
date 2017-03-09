import { PatrickProjectPage } from './app.po';

describe('patrick-project App', () => {
  let page: PatrickProjectPage;

  beforeEach(() => {
    page = new PatrickProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

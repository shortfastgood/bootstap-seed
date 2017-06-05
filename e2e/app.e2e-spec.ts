import { BootstrapSeedsPage } from './app.po';

describe('bootstrap-seeds App', () => {
  let page: BootstrapSeedsPage;

  beforeEach(() => {
    page = new BootstrapSeedsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

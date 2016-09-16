import { AngularCliBlogPage } from './app.po';

describe('angular-cli-blog App', function() {
  let page: AngularCliBlogPage;

  beforeEach(() => {
    page = new AngularCliBlogPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

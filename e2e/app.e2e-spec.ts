import { TestRC5ProjPage } from './app.po';

describe('test-rc5-proj App', function() {
  let page: TestRC5ProjPage;

  beforeEach(() => {
    page = new TestRC5ProjPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

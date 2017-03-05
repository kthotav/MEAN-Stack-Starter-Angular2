import { DatavisPage } from './app.po';

describe('datavis App', function() {
  let page: DatavisPage;

  beforeEach(() => {
    page = new DatavisPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

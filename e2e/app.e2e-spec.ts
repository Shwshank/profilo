import { OnepagePage } from './app.po';

describe('onepage App', () => {
  let page: OnepagePage;

  beforeEach(() => {
    page = new OnepagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

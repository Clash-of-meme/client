import { ClashOfMemeClientPage } from './app.po';

describe('clash-of-meme-client App', function() {
  let page: ClashOfMemeClientPage;

  beforeEach(() => {
    page = new ClashOfMemeClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

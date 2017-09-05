import { InModelWebClientPage } from './app.po';

describe('in-model-web-client App', function() {
  let page: InModelWebClientPage;

  beforeEach(() => {
    page = new InModelWebClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

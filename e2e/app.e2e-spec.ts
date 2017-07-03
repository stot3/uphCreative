import { UphCreativePage } from './app.po';

describe('uph-creative App', () => {
  let page: UphCreativePage;

  beforeEach(() => {
    page = new UphCreativePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

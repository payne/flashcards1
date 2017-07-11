import { Flashcards1Page } from './app.po';

describe('flashcards1 App', () => {
  let page: Flashcards1Page;

  beforeEach(() => {
    page = new Flashcards1Page();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});

import { NgTourOfHeroesReduxPage } from './app.po';

describe('ng-tour-of-heroes-redux App', () => {
  let page: NgTourOfHeroesReduxPage;

  beforeEach(() => {
    page = new NgTourOfHeroesReduxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});

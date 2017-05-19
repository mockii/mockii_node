import { browser, element, by } from 'protractor';

describe('QuickStart E2E Tests', function () {

  let expectedMsg = 'Hello Angular';

  beforeEach(function () {
    browser.get('');
  });

  /*it('should display: ' + expectedMsg, function () {
    expect(element(by.css('h1')).getText()).toEqual(expectedMsg);
  });*/

  // Using async / await to "dereference" the promise works.
  it('should display: ' + expectedMsg, async() => {
      let subject = await element(by.css('h1')).getText();
      let result  = true;
    expect(subject).toEqual(expectedMsg);
  });

    it('should have header', async () => {
        let subject = await element(by.css('h1')).isPresent();
        let result  = true;
        expect(subject).toEqual(result);
    });

    /*it('should show three items', async () => {
        const EXPECTED_NUMBER_OF_ITEMS: number = 3;
        const value = await page.listOfTabs.count();
        expect(value).toBe(EXPECTED_NUMBER_OF_ITEMS);
    });*/

});

/*
import { Ang2Page } from './app.po';

describe('ang2 App', function() {
  let page: Ang2Page;

  beforeEach(() => {
    page = new Ang2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
*/

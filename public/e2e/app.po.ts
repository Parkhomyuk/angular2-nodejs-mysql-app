import { browser, element, by } from 'protractor';

export class ClientPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    //noinspection TypeScriptUnresolvedFunction
    return element(by.css('app-root h1')).getText();
  }
}

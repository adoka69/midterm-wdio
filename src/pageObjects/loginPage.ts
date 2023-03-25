import AllureReporter from "@wdio/allure-reporter";
import { loginURL } from "../testData/login";
import { general, loginElements } from "./locators";

class LoginPage {

  async login(email: string, password: string): Promise<void> {
    AllureReporter.startStep(`Login with valid credentials`);
    await browser.url(loginURL);
    (await loginElements.loginForm).waitForDisplayed();
    await (await loginElements.loginField).setValue(email);
    AllureReporter.addStep(`Enter the valid ${email}`);
    await (await loginElements.passwordField).setValue(password);
    AllureReporter.addStep(`Enter the valid ${email}`);
    await (await loginElements.enterButton).click();
    await (await general.logo).waitForDisplayed();
    await browser.waitUntil(
      () => browser.execute(() => document.readyState === 'complete'),
      {
        timeout: 20000,
        timeoutMsg: 'Page is not loaded'
      }
    );
    AllureReporter.endStep();
  }

  async logout(): Promise<void> {
    AllureReporter.startStep(`Log out of the system`);
    await (await loginElements.logoutBtn).waitForDisplayed();
    await (await loginElements.logoutBtn).click();
    await browser.waitUntil(
      () => browser.execute(() => document.readyState === 'complete'),
      {
        timeout: 20000,
        timeoutMsg: 'Page is not loaded'
      }
    );
    await (await loginElements.loginForm).waitForDisplayed();
    AllureReporter.endStep();
  }
}

export const loginPage = new LoginPage();
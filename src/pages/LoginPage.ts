import { Page, expect } from "@playwright/test";
import HomePage from "./HomePage";

export default class LoginPage {
  private readonly usernameInputSelector = "input[name='username']";
  private readonly passwordInputSelector = "input[name='password']";
  private readonly loginButtonSelector = `//button[@type='submit']`;

  constructor(private page: Page) {}

  // Navigate to the login page
  async navigateToLoginPage() {
    await this.page.goto("/");
  }

  // Fill the username field
  async fillUsername(username: string) {
    await this.page.locator(this.usernameInputSelector).fill(username);
  }

  // Fill the password field
  async fillPassword(password: string) {
    await this.page.locator(this.passwordInputSelector).fill(password);
  }

  // Click the login button
  async clickLoginButton() {
    try {
      await this.page.locator(this.loginButtonSelector).click();
    } catch (error) {
      console.error(`Error clicking login button: ${error}`);
      throw error; // Re-throw the error for debugging or logging
    }

    const homePage = new HomePage(this.page);
    return homePage;
  }

  // Define error message locators
  private readonly errorMessageLocator = "Invalid credentials";
  private readonly errorMessageRequiredLocator = "Required";

  // Check if the "Invalid credentials" error message is visible
  async expectErrorMessageToBeVisible() {
    const errorMessage = this.page.locator(`text=${this.errorMessageLocator}`);
    await expect(errorMessage).toBeVisible({ timeout: 15000 });
  }

  // Check if the "Required" error message is visible
  async expectErrorMessageRequiredToBeVisible() {
    const errorMessage = this.page.locator(`text=${this.errorMessageRequiredLocator}`);
    await expect(errorMessage).toBeVisible({ timeout: 15000 });
  }
}



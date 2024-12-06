import { test, expect } from "@playwright/test";
import LoginPage from "../pages/LoginPage";
import HomePage from "../pages/HomePage";

import * as dotenv from 'dotenv';
dotenv.config();

test.describe("Login Tests", () => {
    let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
    loginPage = new LoginPage(page);
    await loginPage.navigateToLoginPage();
});

test("Valid Username & Valid Password", async () => {

    await loginPage.fillUsername(process.env.validuserid!);
    await loginPage.fillPassword(process.env.validpassword!);

    // Click login button
    const homePage = await loginPage.clickLoginButton();

    await homePage.expectDashboardTextToBeVisible();
  });

test("Invalid Username & Valid Password", async () => {

    test.fail(true); // Mark this test as expected to fail
    await loginPage.fillUsername(process.env.invaliduserid!);
    await loginPage.fillPassword(process.env.validpassword!);
  
    // Click login button
    await loginPage.clickLoginButton();
  
    await loginPage.expectErrorMessageToBeVisible();
});
  

test("Valid Username & Invalid Password", async () => {

    await loginPage.fillUsername(process.env.validuserid!);
    await loginPage.fillPassword(process.env.invalidpassword!);

    // Click login button
    await loginPage.clickLoginButton();

    await loginPage.expectErrorMessageToBeVisible();
});

test("Invalid Username & Invalid Password", async () => {

    await loginPage.fillUsername(process.env.invaliduserid!);
    await loginPage.fillPassword(process.env.invalidpassword!);

    // Click login button
    await loginPage.clickLoginButton();

    await loginPage.expectErrorMessageToBeVisible();
});

test("Valid Username & Blank Password", async () => {

    await loginPage.fillUsername(process.env.validuserid!);
    // Do not fill the password field

    // Click login button
    await loginPage.clickLoginButton();

    await loginPage.expectErrorMessageRequiredToBeVisible();
});

  test("Blank Username & Valid Password", async () => {

    // Do not fill the username field
    await loginPage.fillPassword(process.env.validpassword!);

    // Click login button
    await loginPage.clickLoginButton();

    await loginPage.expectErrorMessageRequiredToBeVisible();
  });

  test("Invalid Username & Blank Password", async () => {

    await loginPage.fillUsername(process.env.invaliduserid!);
    // Do not fill the password field

    // Click login button
    await loginPage.clickLoginButton();

    await loginPage.expectErrorMessageRequiredToBeVisible();
  });

  test("Blank Username & Invalid Password", async () => {

    // Do not fill the username field
    await loginPage.fillPassword(process.env.invalidpassword!);

    // Click login button
    await loginPage.clickLoginButton();

    await loginPage.expectErrorMessageRequiredToBeVisible();
  });

test("Blank Username & Blank Password", async ({ page }) => {

    await loginPage.clickLoginButton();

    // Get both error messages with 'Required' text
    const errorMessages = page.locator('text=Required');

    // Check if the first error message is visible
    await expect(errorMessages.first()).toBeVisible({ timeout: 15000 });

    // Check if the second error message is visible
    await expect(errorMessages.nth(1)).toBeVisible({ timeout: 15000 });
});

});

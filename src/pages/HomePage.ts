import { Page, expect } from "@playwright/test";

export default class HomePage {

    private readonly dashboardTextLocator = "Dashboard";

    constructor(private page: Page) {

    }

    async expectDashboardTextToBeVisible() {
        await expect(this.page.getByRole('heading', { name: 'Dashboard' })).toBeVisible({ timeout: 15000 });
    }
    
}
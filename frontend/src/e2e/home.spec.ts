import { expect, test } from "@playwright/test";

test("should navigate to products listing page", async ({ page }) => {
  await page.goto("/");

  await page.getByText("Go to products listing").click();

  await expect(page).toHaveURL("/products?page=1&pageSize=5&type=all");

  await expect(page.getByRole("heading", { level: 1 })).toContainText(
    "Products page"
  );
});

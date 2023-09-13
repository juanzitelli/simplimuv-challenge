import { expect, test } from "@playwright/test";

test("should fill form correctly and transition to thank you page", async ({
  page,
}) => {
  await page.goto("/products?page=1&pageSize=5&type=all");

  await page.getByTestId("0").click();

  await page.waitForURL("/products/**");

  await page.getByTestId("quote-button").click();

  await page.waitForURL("/products/**/quote");

  await page.getByLabel("First Name").fill("John");
  await page.getByLabel("Last name").fill("Doe");
  await page.getByLabel("Email").fill("johndoe@test.com");
  await page.getByLabel("Phone").fill("1234567");

  await page.getByTestId("submit-button").click();

  await page.waitForURL("/products/**/thank-you");

  await expect(page.getByTestId("thank-you")).toContainText("Thank You!");
});

test("should show errors if lead data is incomplete", async ({ page }) => {
  await page.goto("/products?page=1&pageSize=5&type=all");

  await page.getByTestId("0").click();

  await page.waitForURL("/products/**");

  await page.getByTestId("quote-button").click();

  await page.waitForURL("/products/**/quote");

  await page.getByLabel("First Name").fill("John");
  await page.getByLabel("Last name").fill("a");
  await page.getByLabel("Email").fill("johndoe@test.com");
  await page.getByLabel("Phone").fill("1234567");

  await page.getByTestId("submit-button").click();

  expect(page.getByTestId("error-messages")).toBeDefined();
});

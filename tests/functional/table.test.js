/**
 * @jest-environment jest-playwright-preset
 * @flow
 */
import { screenshot, scroll } from '../utils/playwright.js';

it('should position popper on right when reference is in table', async () => {
  await page.goto(`${TEST_URL}/table/basic.html`);

  await scroll(page, 'html', 100);

  expect(await screenshot(page)).toMatchImageSnapshot();
});

it('should position popper on right when reference and popper are in table', async () => {
  await page.goto(`${TEST_URL}/table/same.html`);

  await scroll(page, 'html', 100);

  expect(await screenshot(page)).toMatchImageSnapshot();
});

it('should position popper on right when reference is in table inside offsetParents', async () => {
  await page.goto(`${TEST_URL}/table/offset-parent.html`);

  await scroll(page, 'html', 100);

  expect(await screenshot(page)).toMatchImageSnapshot();
});

it('should position popper on right when reference and popper are in table inside offsetParents', async () => {
  await page.goto(`${TEST_URL}/table/same-offset-parent.html`);

  await scroll(page, 'html', 100);

  expect(await screenshot(page)).toMatchImageSnapshot();
});

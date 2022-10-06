import { newE2EPage } from '@stencil/core/testing';

describe('message-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<message-box></message-box>');

    const element = await page.find('message-box');
    expect(element).toHaveClass('hydrated');
  });
});

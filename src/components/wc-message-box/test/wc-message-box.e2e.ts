import { newE2EPage } from '@stencil/core/testing';

describe('wc-message-box', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<wc-message-box></wc-message-box>');

    const element = await page.find('wc-message-box');
    expect(element).toHaveClass('hydrated');
  });
});

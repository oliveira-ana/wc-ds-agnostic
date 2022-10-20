import { newSpecPage } from '@stencil/core/testing';
import { WcMessageBox } from '../wc-message-box';

describe('wc-message-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [WcMessageBox],
      html: `<wc-message-box></wc-message-box>`,
    });
    expect(page.root).toEqualHtml(`
      <wc-message-box>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </wc-message-box>
    `);
  });
});

import { newSpecPage } from '@stencil/core/testing';
import { MessageBox } from '../message-box';

describe('message-box', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [MessageBox],
      html: `<message-box></message-box>`,
    });
    expect(page.root).toEqualHtml(`
      <message-box>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </message-box>
    `);
  });
});

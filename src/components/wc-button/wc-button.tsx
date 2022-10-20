import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'wc-button',
  styleUrl: 'wc-button.scss',
  shadow: true,
})
export class WcButton {

  render() {
    return (
      <Host>
        <button>Click-me</button>
      </Host>
    );
  }

}

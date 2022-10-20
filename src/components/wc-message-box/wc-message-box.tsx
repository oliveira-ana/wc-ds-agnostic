import { Component, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'wc-message-box',
  styleUrl: 'wc-message-box.scss',
  shadow: true,
})
export class MessageBox {
   @Prop() message: string;
   @Prop() variation: "success" | "pending" | "warning" | "default";

   getStatus() {
    if (this.variation === 'success') {
      return 'message-box_success';
    }

    if (this.variation === 'pending') {
      return 'message-box_error_external';
    }
    if (this.variation === 'warning') {
      return 'message-box_warning';
    }
    if (this.variation === 'default') {
      return 'message-box_dafault';
    }
   }

  render() {
    return (
      <Host>
        <div class={'message-box' + ' ' + this.getStatus()}>
          <p>
            {this.message}
          </p>
        </div>
      </Host>
    );
  }

}
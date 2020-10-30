import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'app-form',
  styleUrl: 'app-form.css',
  shadow: true,
})
export class AppForm {

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

}

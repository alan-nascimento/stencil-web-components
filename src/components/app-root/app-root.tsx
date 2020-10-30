import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div class="container">
        <header>
          <app-title title="Stencil Todo List" />
        </header>
        <main>
          <app-todo />
        </main>
      </div>
    );
  }
}

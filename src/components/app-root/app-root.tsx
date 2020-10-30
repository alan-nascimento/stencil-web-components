import { Component, h } from '@stencil/core';

@Component({
  tag: 'app-root',
  shadow: true,
})
export class AppRoot {
  render() {
    return (
      <div>
        <header>
          <h1>TODO List</h1>
        </header>

        <main>

        </main>
      </div>
    );
  }
}

import { Component, h, Prop } from '@stencil/core';

@Component({
  tag: 'app-table',
  shadow: true,
})
export class AppTable {
  @Prop()
  tasks: string[] = [];

  render() {
    return (
      <ul>
        {this.tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    );
  }
}

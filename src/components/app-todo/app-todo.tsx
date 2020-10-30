import { Component, State, Host, h } from '@stencil/core';

@Component({
  tag: 'app-todo',
  styleUrl: 'app-todo.css',
  shadow: true,
})
export class AppTodo {
  @State()
  tasks: string[] = [];

  handleAddTask = (event: CustomEvent) => {
    this.tasks = [
      ...this.tasks,
      event.detail
    ]
  }

  render() {
    return (
      <Host>
        <app-form onAddTask={this.handleAddTask} />
        <app-table tasks={this.tasks} />
      </Host>
    );
  }
}

import { Component, State, Host, h } from '@stencil/core';

@Component({
  tag: 'app-todo',
  styleUrl: 'app-todo.css',
  shadow: true,
})
export class AppTodo {
  @State()
  task: string;

  @State()
  tasks: string[] = [];

  handleSubmit = (event: Event) => {
    event.preventDefault();

    if (this.task) {
      this.tasks.push(this.task);
      this.task = null;
    }
  }

  handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.task = input.value;
  }

  render() {
    return (
      <Host>
        <form onSubmit={this.handleSubmit}>
          <input
            id="description"
            type="text"
            name="description"
            value={this.task}
            onChange={this.handleInput}
          />
          <button type="submit">Add</button>
        </form>
        <ul>
          {this.tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      </Host>
    );
  }
}

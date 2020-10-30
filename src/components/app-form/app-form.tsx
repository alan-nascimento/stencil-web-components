import { Component, h, State, Event, EventEmitter } from '@stencil/core';

@Component({
  tag: 'app-form',
  styleUrl: 'app-form.css',
  shadow: true,
})
export class AppForm {
  @State()
  task: string;

  @Event()
  addTask: EventEmitter;

  handleSubmit = (event: Event) => {
    event.preventDefault();

    if (this.task) {
      this.addTask.emit(this.task);
      this.task = null;
    }
  }

  handleInput = (event: Event) => {
    const input = event.target as HTMLInputElement;
    this.task = input.value;
  }

  render() {
    return (
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
    );
  }
}

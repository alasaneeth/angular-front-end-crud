import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Students } from "./students/students";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Students],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('my-app');
}

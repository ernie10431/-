import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
ex1: string = "我是標題";
ex2: string = "內容是我";
picture: string = "chocolate.png";
}

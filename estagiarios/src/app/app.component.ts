import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  username = "jonny";
    userdata={
      email: 'jonny@gmail.com',
      role: 'Admin',
    };
  title = 'estagiarios';
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.scss']
})
export class EventosComponent {
  show: boolean = true;

  clicar(): void {
    this.show = !this.show;
    
  }

}

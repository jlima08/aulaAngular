import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.scss']
})
export class DirectivesComponent {
  size = 40;
  font = 'Arial';
  color = 'red';

  classes = ['red-title'];

  underline = 'underline-title'

  constructor(
    private router: Router
  ){

  }

}

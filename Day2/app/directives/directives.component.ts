import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css']
})
export class DirectivesComponent {

  // constructor() { }

  // ngOnInit(): void {
  // }
  choice: boolean = false;
  toggle = ()=>this.choice = !this.choice;

}

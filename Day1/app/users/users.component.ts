import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  @Input()
  uname:string="Unknown";
  
  @Input('string')
  image:string = "src/image.jpg";
  }



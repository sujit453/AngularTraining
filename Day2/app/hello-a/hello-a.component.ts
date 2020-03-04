import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-hello-a',
  templateUrl: './hello-a.component.html',
  styleUrls: ['./hello-a.component.css'],
 
})
export class HelloAComponent {

  message: string = "";
  constructor(private helloService : HelloService) { }

  callService = (name)=>this.message = this.helloService.sayHello(name);

}

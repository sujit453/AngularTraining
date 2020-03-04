import { Component, OnInit } from '@angular/core';
import { HelloService } from '../hello.service';

@Component({
  selector: 'app-hello-b',
  templateUrl: './hello-b.component.html',
  styleUrls: ['./hello-b.component.css']
})
export class HelloBComponent {

  message: string = "";
  constructor(private helloService : HelloService) { }

  callService = (name)=>this.message = this.helloService.sayHello(name);

  

}

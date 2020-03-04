import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  sayHello = (name) => "Hello " + name + " -from service";
  
}

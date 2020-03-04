import { Component, OnInit } from '@angular/core';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'app-databindingdemo',
  templateUrl: './databindingdemo.component.html',
  styleUrls: ['./databindingdemo.component.css']
})

export class DatabindingdemoComponent {
message:string="this is a test message";
image:string="/assets/image.JPG";
isValid:boolean = false;
uemail:string ="any@acc.com";
clickHandler = (name)=> console.log("Button clicked = " +name);

  public num1:number;
  public num2:number;
  public result:number;

  sum() {
    this.result=this.num1 +this.num2;
  }

  //add= (N1:String,N2:STRING)=>this.result=parseInt(N1) + parseInt(N2);

  diff() {
    this.result=this.num1 - this.num2;
  }
  multiply () {
    this.result=this.num1 * this.num2;
  }
  div () {
    this.result=this.num1 / this.num2;
  }

}

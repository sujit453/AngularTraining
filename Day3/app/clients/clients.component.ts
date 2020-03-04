import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';

@Component({
  selector: 'app-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.css']
})
export class ClientsComponent implements OnInit {
  clients = [];
  constructor(private clientService: ClientsService) { }

  ngOnInit(): void {
    this.getClients();
  }

  getClients = ()=>{
    this.clientService.getClients().subscribe(
      (response)=>{
        //Data Handler
        this.clients = response;
        console.log( this.clients);
        },
      (status)=>{
        // Error Handler
        console.log ("something was wrong"+status);
      }
    );
  }
}
import { Component, OnInit } from '@angular/core';
import { provider } from '../models/providers.data';


@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styles: [
  ]
})
export class ProvidersComponent implements OnInit {

  providers: any[] = provider

  constructor() { }

  ngOnInit(): void {
  }

}

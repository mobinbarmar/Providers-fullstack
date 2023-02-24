import { Component, OnInit } from '@angular/core';
import { map, tap } from 'rxjs';
import { ProviderClass } from '../models/providers.class';
import { ProviderService } from '../services/provider.service';


@Component({
  selector: 'app-providers',
  templateUrl: './providers.component.html',
  styles: [
  ]
})
export class ProvidersComponent implements OnInit {

  providers!: ProviderClass[]

  constructor(private providerSer: ProviderService) { }

  ngOnInit(): void {
    this.loadData()
  }

  loadData(){
    this.providerSer.getProviders()
      .subscribe((data) => {
        console.log(data);
        this.providers = data
        this.providers
        console.log(data[0]._id);
      }, err => {
        console.log(err)
      })
  }

}

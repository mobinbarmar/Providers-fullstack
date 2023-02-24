import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProviderClass } from 'src/app/models/providers.class';
import { providers } from 'src/app/models/providers.data';

@Component({
  selector: 'app-add-providers',
  templateUrl: './add-providers.component.html',
  styleUrls: []
})
export class AddProvidersComponent implements OnInit {

  submitted = false
  provider!: ProviderClass
  providersForm!: FormGroup

  constructor() { }

  ngOnInit(): void {
    this.providersForm = new FormGroup({
      firstname: new FormControl('', [Validators.required, Validators.minLength(2)]),
      lastname: new FormControl(),
      position: new FormControl(),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [Validators.required, Validators.pattern('^[2-9]{3}-[0-9]{3}-[0-9]{4}$')]),
      company_name: new FormControl(),
      address: new FormControl(),
      address2: new FormControl(),
      city: new FormControl(),
      state: new FormControl(),
      postal_code: new FormControl(),
      description: new FormControl(),
      tagline: new FormControl(),

    })
  }

  handleSubmit() {
    console.log(this.providersForm.value);

    let newId: number
    while (true) {
      newId = Math.floor(Math.random() * 10000) + 99999
      if (providers.findIndex(el => el.id == newId) == -1) {
        break
      }
    }
    
    let p = this.providersForm.value
    console.log(p);
    this.provider = {
      id: p.id,
      firstname: p.firstname,
      lastname: p.lastname,
      position: p.position,
      company: p.company
    }
    providers.push(this.provider)
    this.submitted = true
    console.log(this.submitted);
  }

  // Method to easy access form controls
  get f(){return this.providersForm.controls}
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ProviderClass } from 'src/app/models/providers.class';
import { ProviderService } from 'src/app/services/provider.service';

@Component({
  selector: 'app-add-providers',
  templateUrl: './add-providers.component.html',
  styleUrls: []
})
export class AddProvidersComponent implements OnInit {

  submitted = false
  emailError = false
  emailErrorMsg = 'Invalid email. Try again!'
  providers!: ProviderClass[]
  provider!: ProviderClass
  providersForm!: FormGroup

  constructor(private providerSer: ProviderService) { }

  ngOnInit(): void {
    this.buildFromControls()
    this.loadData()
  }

  handleSubmit() {
    console.log(this.providersForm.value);
    this.buildProvider()
    if(!this.isInvalidEmail()){
      this.providerSer.addProvider(this.provider)
        .subscribe((data) => {
          this.submitted = true
          this.emailError = false
        }, (err) => {
          console.log(err)
        })
    }
  }
  loadData(){
    this.providerSer.getProviders()
      .subscribe((data) => {
        this.providers = data
        this.providers
      }, err => {
        console.log(err)
      })
  }
  // Check for duplicate emails
  isInvalidEmail(){
    let email = this.providersForm.get('email')?.value
    if(this.providers.filter(el => el.company.email == email).length > 0){
      this.emailError = true
      return true
    }
    return false
  }
  // Generate New id
  getNewId(){
    let newId: number
    while (true) {
      newId = Math.floor(Math.random() * 10000) + 99999
      if (this.providers.findIndex(el => el._id == newId) == -1) {
        return newId
      }
    }
  }
  // Build new provider object
  buildProvider(){
    let p = this.providersForm.value
    this.provider = {
      _id: this.getNewId(),
      firstname: p.firstname,
      lastname: p.lastname,
      position: p.position,
      company: p.company
    }
  }

  // Method to easy access form controls
  get f(){return this.providersForm.controls}

  // Build form controls
  buildFromControls(){
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
}

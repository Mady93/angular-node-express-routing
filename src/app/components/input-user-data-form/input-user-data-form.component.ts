import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'input-user-data-form',
  templateUrl: './input-user-data-form.component.html',
  styleUrls: ['./input-user-data-form.component.scss']
})
export class InputUserDataFormComponent implements OnInit {

  form: FormGroup;


  constructor(private formBuilder: FormBuilder) {}


  ngOnInit(): void {
    
    this.form = this.formBuilder.group({

      firstname: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]{2,25}$')
      ]
      ],
      lastname: ['', [
        Validators.required,
        Validators.pattern('^[a-zA-Z]{2,25}$')
      ]
      ],
      email: ['', [
        Validators.pattern('[a-z0-9._%+-]+@[a-z0-9-.]+.[a-z]{2,12}$'),
        Validators.required,
      ]
      ],
      zipCode: ['', [
        /* Validators.minLength(4), */
        Validators.pattern('^[0-9]{4,6}$'),
        Validators.required
      ]
      ],
      password:['',[
        Validators.pattern('^(?=.*[A-Za-z])(?=.*\\d)(?=.*[@$!%*?&])(?=.*[A-Z])[A-Za-z\\d@$!%*?&]{8,12}$'),
        Validators.required,
      ]
    ]
  
    });
   }



  getFirstName() {
    return this.form.get("firstname");
  }

  getLastName() {
    return this.form.get("lastname");
  }

  getEmail() {
    return this.form.get("email");
  }

  getZipCode() {
    return this.form.get("zipCode");
  }

  getPassword() {
    return this.form.get("password");
  }





  submitForm() {
    if (this.form.invalid) {
      return console.log('Form invalid!')
    } else {
      console.log('Form is valid!')
      console.log(this.form.value);
      this.form.reset();
    }
  }

}

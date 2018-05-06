import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.scss']
})
export class AddProjectComponent implements OnInit {

  form: FormGroup;
  formErrors: any;
  constructor(private formBuilder: FormBuilder) {
  
    // Reactive form errors
    this.formErrors = {
      titre: {},
      description: {}
     
     
    };
  }

  ngOnInit() {
    // Reactive Form
    this.form = this.formBuilder.group({
    
      titre: ['', Validators.required],
      description: ['', Validators.required]
    
      
    });

    this.form.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });
  }
  onFormValuesChanged() {
    for (const field in this.formErrors) {
      if (!this.formErrors.hasOwnProperty(field)) {
        continue;
      }

      // Clear previous errors
      this.formErrors[field] = {};

      // Get the control
      const control = this.form.get(field);

      if (control && control.dirty && !control.valid) {
        this.formErrors[field] = control.errors;
      }
    }
  }
  

}


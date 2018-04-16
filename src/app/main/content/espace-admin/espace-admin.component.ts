import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
@Component({
  selector: 'app-espace-admin',
  templateUrl: './espace-admin.component.html',
  styleUrls: ['./espace-admin.component.scss']
})
export class EspaceAdminComponent {
  forgotPasswordForm: FormGroup;
  forgotPasswordFormErrors: any;



  constructor(
    private fuseConfig: FuseConfigService,
    private formBuilder: FormBuilder

  ) {
    this.fuseConfig.setConfig({
      layout: {
        navigation: 'none',
        toolbar: 'none',
       
      }
    });

    this.forgotPasswordFormErrors = {
      email: {},
      msg: {}
    };


  }


ngOnInit()
{
  this.forgotPasswordForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    msg: ['', Validators.required]
  });


  this.forgotPasswordForm.valueChanges.subscribe(() => {
    this.onForgotPasswordFormValuesChanged();
  });
}

onForgotPasswordFormValuesChanged()
{
  for (const field in this.forgotPasswordFormErrors) {
    if (!this.forgotPasswordFormErrors.hasOwnProperty(field)) {
      continue;
    }

    // Clear previous errors
    this.forgotPasswordFormErrors[field] = {};

    // Get the control
    const control = this.forgotPasswordForm.get(field);

    if (control && control.dirty && !control.valid) {
      this.forgotPasswordFormErrors[field] = control.errors;
    }
  }
}
}



import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';

import { FuseConfigService } from '@fuse/services/config.service';
import { fuseAnimations } from '@fuse/animations';
@Component({
  selector: 'app-signin-prop',
  templateUrl: './signin-prop.component.html',
  styleUrls: ['./signin-prop.component.scss'],
  animations: fuseAnimations
})
export class SigninPropComponent implements OnInit {
  form: FormGroup;
  formErrors: any;

  // Vertical Stepper
  verticalStepperStep1: FormGroup;
  verticalStepperStep2: FormGroup;
  verticalStepperStep3: FormGroup;
  verticalStepperStep1Errors: any;
  verticalStepperStep2Errors: any;
  verticalStepperStep3Errors: any;
  constructor(private formBuilder: FormBuilder,
    private fuseConfig: FuseConfigService) {

    this.fuseConfig.setConfig({
      layout: {
        navigation: 'none',
        toolbar: 'none',
        footer: 'none'
      }
    });
    // Reactive form errors
    this.formErrors = {
      company: {},
      firstName: {},
      lastName: {},
      address: {},
      address2: {},
      city: {},
      state: {},
      country: {},
      email: {},
      password: {},
      passwordConfirm: {}
    };


    // Vertical Stepper form error
    this.verticalStepperStep1Errors = {
      firstName: {},
      lastName: {}
    };

    this.verticalStepperStep2Errors = {
      address: {},
      city: {},
      state: {}
    };

    this.verticalStepperStep3Errors = {
      email: {},
      password: {},
      passwordConfirm: {}

    };
  }

  ngOnInit() {
    // Reactive Form
    this.form = this.formBuilder.group({
      company: [
        {
          value: 'Google',
          disabled: true
        }, Validators.required
      ],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      address: ['', Validators.required],
      address2: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required],
      country: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirm: ['', [Validators.required, confirmPassword]]
    });

    this.form.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });



    // Vertical Stepper form stepper
    this.verticalStepperStep1 = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required]
    });

    this.verticalStepperStep2 = this.formBuilder.group({
      address: ['', Validators.required],
      city: ['', Validators.required],
      state: ['', Validators.required]

    });

    this.verticalStepperStep3 = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      passwordConfirm: ['', [Validators.required, confirmPassword]]

    });

    this.verticalStepperStep1.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });

    this.verticalStepperStep2.valueChanges.subscribe(() => {
      this.onFormValuesChanged();
    });

    this.verticalStepperStep3.valueChanges.subscribe(() => {
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

  finishHorizontalStepper() {
    alert('You have finished the horizontal stepper!');
  }

  finishVerticalStepper() {
    alert('You have finished the vertical stepper!');
  }
}

function confirmPassword(control: AbstractControl) {
  if (!control.parent || !control) {
    return;
  }

  const password = control.parent.get('password');
  const passwordConfirm = control.parent.get('passwordConfirm');

  if (!password || !passwordConfirm) {
    return;
  }

  if (passwordConfirm.value === '') {
    return;
  }

  if (password.value !== passwordConfirm.value) {
    return {
      passwordsNotMatch: true
    };
  }
}

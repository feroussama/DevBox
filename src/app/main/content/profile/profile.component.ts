import { Component, ViewEncapsulation } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material';

import { fuseAnimations } from '@fuse/animations';
import * as shape from 'd3-shape';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
   encapsulation: ViewEncapsulation.None,
    animations   : fuseAnimations
})
export class ProfileComponent {
  dialogRef: any;

  constructor() {
  
   }

}

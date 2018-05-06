import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CdkTableModule } from '@angular/cdk/table';

import { MatButtonModule, MatDividerModule, MatFormFieldModule, MatIconModule, MatMenuModule, MatSelectModule, MatSidenavModule, MatTableModule, MatTabsModule } from '@angular/material';

import { NgxChartsModule } from '@swimlane/ngx-charts';

import { FuseSharedModule } from '@fuse/shared.module';
import { FuseWidgetModule } from '@fuse/components/widget/widget.module';





@NgModule({
    declarations: [
    
    ],
    imports     : [
      

        CdkTableModule,
        MatButtonModule,
        MatDividerModule,
        MatFormFieldModule,
        MatIconModule,
        MatMenuModule,
        MatSelectModule,
        MatSidenavModule,
        MatTableModule,
        MatTabsModule,
        NgxChartsModule,
        FuseSharedModule,
        FuseWidgetModule
    ],
    providers   : [
       
    ]
})
export class FuseProjectDashboardModule
{
}


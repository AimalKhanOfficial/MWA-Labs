import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FarmersDataComponent } from './farmers-data/farmers-data.component';
import { RouterModule } from '@angular/router';
import { FarmersDataParamGuard } from '../farmers-data-param.guard';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forChild([
      {
        path : '', component : FarmersDataComponent
      }, 
      {
        path: 'farm/:id', component: FarmersDataComponent, 
        canActivate : [FarmersDataParamGuard]
      } 
    ])
  ],
  declarations: [FarmersDataComponent]
})
export class FarmersMarketModule { }

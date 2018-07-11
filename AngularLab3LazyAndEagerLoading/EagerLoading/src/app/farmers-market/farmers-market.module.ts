import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { FarmersComponentComponent } from './farmers-component/farmers-component.component';
import { DetailsChildComponentComponent } from './details-child-component/details-child-component.component';
import { CheckFarmParamGuard } from '../check-farm-param.guard';

@NgModule({
  imports: [
    CommonModule, 
    RouterModule.forRoot([
      {
        path: '', component: FarmersComponentComponent
      },
      {
        path: 'farm/:id', component: FarmersComponentComponent, 
        canActivate : [CheckFarmParamGuard]
      } 
    ])
  ],
  declarations: [FarmersComponentComponent, DetailsChildComponentComponent],
  bootstrap: [FarmersComponentComponent]
})
export class FarmersMarketModule { }
